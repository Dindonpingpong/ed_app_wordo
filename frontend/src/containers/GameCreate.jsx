import React from 'react';
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

const GameCreate = () => {
    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <FormGroup>
                    <Label for="exampleSelect">Game mode</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Classico wordy</option>
                        <option>Limito time</option>
                        <option>Uno tupe</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select friends</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        <option>Mgrass</option>
                        <option>Nyamilk</option>
                        <option>Whoami</option>
                        <option>Kina</option>
                        <option>RJ</option>
                    </Input>
                </FormGroup>
                <Button>Create</Button>
            </Col>
        </Row>
    );
};

export default GameCreate;