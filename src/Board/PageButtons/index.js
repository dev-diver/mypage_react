import React, { useState , useEffect } from "react";

import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import NumberButton from "./NumberButton";
import { ButtonGroup } from "@mui/material";

const PageButtons = (props) => {

    
    const MAX_BUTTONS = 10;
    const { offset, pages, setPageNumber, pageNumber, setOffset } = props;

    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        setSelectedPage(pageNumber+1);
    }, [pageNumber])

    const selectPage = (e,i) => {
        setPageNumber(i-1); //1더해진 숫자
        setSelectedPage(i);
    }

    let button_length = Math.min(MAX_BUTTONS,pages);
    let buttons = [...Array(parseInt(button_length))]
        .map((e,i)=>{
            const number = 1+i+offset;
            return (<NumberButton 
                        key={i} 
                        number={number} 
                        selected={selectedPage===number}
                        onClick={(e)=>selectPage(e,number)}
                    />)
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