import apifacade from "./apiFacade.js";
import loginfacade from "./loginFacade.js";

import {API_URL} from "../../setting.js";

function userFacade () {

    const createUser = (user, password) => {
        const options = apifacade.makeOptions("POST", null, {"userName": user, "userPass": password})
        return fetch(API_URL + "/api/info", options)
            .then(apifacade.handleHttpErrors)
    }

    const updateUser = (user, userId) => {
        const options = apifacade.makeOptions("PUT", null, {"userName": user})
        return fetch(API_URL + "/api/info/" + userId, options)
            .then(apifacade.handleHttpErrors)
    }
    const getUserRoles = () => {
        const token = loginfacade.getToken()
        if (token != null) {
            const payloadBase64 = loginfacade.getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const roles = decodedClaims.roles
            return roles
        } else return ""
    }

    const hasUserAccess = (neededRole, loggedIn) => {
        const roles = getUserRoles().split(',')
        return loggedIn && roles.includes(neededRole)
    }


    const getUserName = () => {
        const token = loginfacade.getToken()
        if (token != null) {
            const payloadBase64 = loginfacade.getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const username = decodedClaims.username
            return username
        } else return ""
    }

    const getUserId = () => {
        const token = loginfacade.getToken()
        if (token != null) {
            const payloadBase64 = loginfacade.getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const id = decodedClaims.id
            return id
        } else return ""
    }
    return {
        createUser,
        updateUser,
        hasUserAccess,
        getUserRoles,
        getUserName,
        getUserId
    }
}

const userfacade = userFacade();
export default userfacade;

