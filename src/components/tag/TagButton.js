import React from 'react';
import { Button,Checkbox, FormControlLabel, FormGroup } from '@mui/material';


const TagButton = (props) => {
    const category = props.category;

    return (
        <>
        <FormGroup>
            <FormControlLabel 
            control={<Checkbox/>} 
            label={category}
            value={category}
            />
        </FormGroup>
        </>
    );
};

export default TagButton;