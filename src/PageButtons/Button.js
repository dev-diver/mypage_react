import React, { useState } from "react";

const Button = (props) => {

    const [number, setNumber] = useState(props.number);
    return (
        <button>{number}</button>
    );
};

export default Button;