import { Box, FormControl, FormHelperText } from "@mui/material";
import React, { useState } from "react";
import WriteButton from './WriteButton.js';
import CancelButton from "./CancelButton.js";
import {TextField, Button } from "@mui/material";

import api from '../api.js';
import { red } from "@mui/material/colors";

const Editor = (props) => {

    const {mode, setWriteMode} = props;
    const [title, setTitle] = useState('');
    const [text, setText] = useState(''); 
    const [loading, setLoading] = useState(true);
    const [formMessage, setFormMessage] = useState('');

    const handleClickStartWrite = (e) => {
        props.setWriteMode(true);
        setFormMessage('');
    }

    const handleClickCancelWrite = (e) => {
        props.setWriteMode(false);
    }

    const handleClickSend = (e) => {
        if(!title || !text){
            setFormMessage('제목과 내용을 입력해주세요');
            return;
        }
        api.post('/article', {
            "title":title,
            "text":text,
            "userId":"user-id"
        })
        .then((response) => {
            console.log(response);
            setLoading(false); // Update loading state
        })
        .catch((error) => {
            console.debug(error);
            setFormMessage(error.message); // Update error state
            setLoading(false);
        });
        props.setWriteMode(false);
    }

    return (
        <Box sx={{ width : '500px'}}>
            <Box sx={{ marginY:'3px', textAlign : 'right'}}>
                {!mode ? 
                <WriteButton onClick={(e)=>handleClickStartWrite(e)}/> : 
                <CancelButton onClick={(e)=>handleClickCancelWrite(e)}/>}
            </Box>
            {mode &&
                <FormControl sx={{'& > *': { marginY:'5px' }}} fullWidth>
                <TextField
                    id="outlined-multiline-static"
                    label="제목"
                    sx = {{marginY:'5px'}}
                    rows={1}
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="글쓰기"
                    sx = {{marginY:'5px'}}
                    rows={10}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    multiline
                />
                <FormHelperText sx={{color: red[900]}}>{formMessage}</FormHelperText>
                <Box sx={{textAlign : 'right'}}>
                    <Button
                        variant="contained"
                        onClick={(e)=>handleClickSend(e)}
                    >작성</Button>
                         
                </Box>
                </FormControl>
            }
        </Box>
    );
};

export default Editor;