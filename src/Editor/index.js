import { Box } from "@mui/material";
import React, { useState } from "react";
import WriteButton from './WriteButton.js';
import CancelButton from "./CancelButton.js";
import {TextField, Button} from "@mui/material";


const Editor = (props) => {

    const {mode, setMode} = props;    

    const handleClickStartWrite = (e) =>{
        setMode(true);
        props.setShowArticle(false);
    }

    const handleClickCancelWrite = (e) => {
        setMode(false);
        props.setShowArticle(true);
    }

    const handleClickSend = (e) => {
        setMode(false);
        props.setShowArticle(true);
    }

    return (
        <Box sx={{width : '500px'}}>
            <Box sx={{marginY:'10px', textAlign : 'right'}}>
                {!mode ? 
                <WriteButton onClick={(e)=>handleClickStartWrite(e)}/> : 
                <CancelButton onClick={(e)=>handleClickCancelWrite(e)}/>}
            </Box>
            {mode &&
                <div>
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="글쓰기"
                    rows={10}
                    multiline
                    defaultValue=""
                />
                <Box sx={{marginY:'10px', textAlign : 'right'}}>
                    <Button
                        onClick={(e)=>handleClickSend(e)} 
                        variant="contained">작성</Button>
                </Box>
                </div>
            }
        </Box>
    );
};

export default Editor;