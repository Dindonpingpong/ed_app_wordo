import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const CustomFormGroup = ({label, options, set}) => {
    const listOptions = options.map((item, key) => 
        <option key={key}>{item}</option>
    );

    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input type="select" onChange={(e) => set(e.target.value)}>
                {listOptions}
            </Input>
        </FormGroup>
    )
};

export default CustomFormGroup;