import React from 'react';
import { CardBody, CardTitle, Col, Row } from 'reactstrap';

const WordCardBody = ({ gameType, word }) => {
    return (
        <CardBody>
            <CardTitle className="mb-3">{gameType}</CardTitle>
            <Row className="mb-3 words">
                <Col>
                    {
                        word &&
                        <p>{word.substring(0, word.length - 1)}<b>{word[0]}</b></p>
                    }
                </Col>
            </Row>
        </CardBody>
    );
};

export default WordCardBody;