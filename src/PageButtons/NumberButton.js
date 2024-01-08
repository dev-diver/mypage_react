import React from "react";
import Button from '@mui/material/Button';

const NumberButton = (props) => {

    return (
        <Button 
            variant = {props.selected ? "contained" : "outlined"}
            onClick =  {props.onClick}
        >
            {props.number}
        </Button>
    );
};

export default NumberButton;