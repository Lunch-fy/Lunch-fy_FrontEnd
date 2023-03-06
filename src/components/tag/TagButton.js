import React from 'react';
import { Button } from '@mui/material';


const TagButton = () => {

    return (
        <div>
            <Button variant='contained'>확인</Button>
            <Button variant='contained' disabled>확인</Button>
        </div>
    );
};

export default TagButton;