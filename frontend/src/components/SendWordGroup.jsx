import React, { useState } from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const SendWordGroup = ({ lastLetter, sendWord, setError }) => {
    const [status, toggle] = useState(false);
    const [inputStatus, toggleInput] = useState(false);
    const [word, setWord] = useState();

    const onChange = (e) => {
        const text = e.target.value;

        if (text[0] !== lastLetter) {
            setError(`Your word should started with '${lastLetter}'`);
            toggle(true);
        }
        else {
            setWord(text);
            toggle(false);
            setError(null);
        }
    }

    const onClick = () => {
        sendWord(word);
        toggleInput(true);
        toggle(true);
    }

    return (
        <InputGroup>
            <Input disabled={inputStatus} defaultValue={lastLetter} onChange={onChange} />
            <InputGroupAddon addonType="append">
                <Button color="success" disabled={status} onClick={onClick}>Send</Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default SendWordGroup;