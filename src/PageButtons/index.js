import React, { useState } from "react";

import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import NumberButton from "./NumberButton";
import { ButtonGroup } from "@mui/material";

const PageButtons = (props) => {

    const MAX_BUTTONS = 10;
    const [offset, setOffset] = useState(props.offset);
    const [pages, setPages] = useState(props.pages);

    let button_length = Math.min(MAX_BUTTONS,pages);
    let buttons = [...Array(parseInt(button_length))]
        .map((e,i)=>{
            return (<NumberButton number={1+i+offset}/>)
        });

    return (
        <ButtonGroup>
            <PrevButton/>
                {buttons}
            <NextButton/>
        </ButtonGroup>
    );
};

export default PageButtons;