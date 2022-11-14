import { useEffect, useState } from 'react';
import chuck from "../images/chuck.gif"
import dad from "../images/dad.gif"
import { Row, Col, Image} from 'react-bootstrap';
import "../styles/main.css";

function Jokes({ apifacade, setErrorMessage }) {
    const [chuckJoke, setChuckJoke] = useState({ chuckJoke: '', chuckJokeReference: '' });
    const [dadJoke, setDadJoke] = useState({ dadJoke: '', dadJokeReference: '' });

    const updateChuckJokes = (data) => {
        console.log('data', data);
        setChuckJoke({ chuckJoke: data.chuckJoke, chuckJokeReference: data.chuckJokeReference });
        setDadJoke({ dadJoke: data.dadJoke, dadJokeReference: data.dadJokeReference });
    };

    useEffect(() => {
        apifacade.fetchData('jokes', updateChuckJokes, setErrorMessage);
    }, [apifacade, setErrorMessage]);

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <Image style={{width:500,height:300}} src={chuck} fluid className="mb-4 "/>
                    <h6 className="jokeText">{chuckJoke.chuckJoke}</h6>
                    <p>
                        Reference: <a href={chuckJoke.chuckJokeReference}>{chuckJoke.chuckJokeReference}</a>
                    </p>
                </Col>
                <Col>
                    <Image style={{width:500,height:300}} src={dad} fluid className="mb-4"/>
                    <h6 className="jokeText">{dadJoke.dadJoke}</h6>
                    <p>
                        Reference: <a href={dadJoke.dadJoke}>{dadJoke.dadJokeReference}</a>
                    </p>
                </Col>
            </Row>
        </>
    );
}

export default Jokes;