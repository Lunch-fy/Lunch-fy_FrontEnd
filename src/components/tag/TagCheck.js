import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';


const TagCheck = (props) => {
    const category = props.category;
    const [checked, setChecked] = useState("");

    const handleChange = (e) => {
      setChecked(e.target.checked);
    };

    useEffect(() => {
        if(checked === true){
        props.addCategory(category);
        }
        else if(checked === false){
        props.popCategory(category);
        }
    },[checked]);


    return (
        <>
            <FormControlLabel
            control={<Checkbox/>} 
            label={category}
            value={checked}
            onChange={handleChange}
            />
        </>
    );
};

export default TagCheck;