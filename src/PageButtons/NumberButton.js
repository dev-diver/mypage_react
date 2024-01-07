import React, { useState } from "react";
import Button from '@mui/material/Button';

const NumberButton = (props) => {

    const [number, setNumber] = useState(props.number);
    return (
        <Button variant ="outlined">{number}</Button>
    );
};

export default NumberButton;