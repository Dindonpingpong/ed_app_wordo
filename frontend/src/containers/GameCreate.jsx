import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import CustomFormGroup from '../components/CustomFormGroup';

const GameCreate = () => {
    const [gameMode, setMode] = useState("Classico wordy");
    const [friend, setFriend] = useState("Nyamilk");
    const modes = ['Classico wordy', 'Timeless', 'Uno type'];
    const friends = ['Mgrass', 'Nyamilk', 'Kina', 'Rj'];

    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <CustomFormGroup label="Game mode" options={modes} set={setMode}/>
                <CustomFormGroup label="Select friends" options={friends} set={setFriend}/>
                <Button>Create</Button>
            </Col>
        </Row>
    );
};

export default GameCreate;