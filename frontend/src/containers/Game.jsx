import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Alert, Card, Col, Container } from 'reactstrap';
import SendWordGroup from '../components/SendWordGroup';
import WordCardBody from '../components/WordCardBody';
import socket from './../util/socket';

const Game = () => {
    const [errorMessage, setError] = useState();
    const [word, sendWord] = useState();
    const { me, uuid } = useParams();

    useEffect(() => {
        socket.on(`word`, (newMessage) => {
            pushChatMessage(messages, newMessage);
        });

        socket.emit('room', {
            uuid: uuid,
            user: me
        });

        return unsubscribe = () => socket.off(`new_message`);
    }, []);

    return (
        <Container className="login">
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Card body className="text-center" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <Alert>{me}'s turn</Alert>

                    <WordCardBody word={word} gameType="Classico wordo"/>
                    {
                        errorMessage &&
                        <Alert color="danger">{errorMessage}</Alert>
                    }
                    <SendWordGroup lastLetter="y" setError={setError} sendWord={sendWord} />
                </Card>
            </Col>
        </Container>
    );
};

export default Game;