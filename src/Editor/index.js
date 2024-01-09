import { Box, FormControl, FormHelperText } from "@mui/material";
import React, { useState } from "react";
import WriteButton from './WriteButton.js';
import CancelButton from "./CancelButton.js";
import { TextField, Button } from "@mui/material";

import api from '../api.js';
import { red } from "@mui/material/colors";

const Editor = (props) => {

    const {editor, setWriteMode, afterAction, displayArticle} = props;
    
    const [loading, setLoading] = useState(true);
    const [formMessage, setFormMessage] = useState('');

    const handleClickStartWrite = (e) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if(!token){
            alert('로그인이 필요합니다.');
        }else{
            setWriteMode(true);
            setFormMessage('');
        }
    }

    const handleClickCancelWrite = (e) => {
        setWriteMode(false);
    }

    const handleClickSendWrite = (e) => {
        if(!editor.title || !editor.text){
            setFormMessage('제목과 내용을 입력해주세요');
            return;
        }
        setLoading(true);
        api.post('/api/article', {
            "title":editor.title,
            "text":editor.text,
            "userId":localStorage.getItem("userId")
        })
        .then((response) => {
            //게시판 재로딩
            setWriteMode(false);
            afterAction('write');
        })
        .catch((error) => {
            setFormMessage("글쓰기 실패"); // Update error state
        });
        setLoading(false);
    }

    const handleClickEditWrite = (e, id) => {
        if(!editor.title || !editor.text){
            setFormMessage('제목과 내용을 입력해주세요');
            return;
        }
        setLoading(true);
        api.put(`/api/article/${id}`, {
            "title":editor.title,
            "text":editor.text,
            "userId":localStorage.getItem("userId")
        })
        .then((response) => {
            //게시판 재로딩
            displayArticle(id, editor.title, editor.text);
            setWriteMode(false);
            afterAction('edit');
        })
        .catch((error) => {
            setFormMessage("편집 실패"); // Update error state
        });
        setLoading(false);
    }

    return (
        <Box sx={{ width : '500px'}}>
            <Box sx={{ marginY:'3px', textAlign : 'right'}}>
                {editor.mode === 'none' ? 
                <WriteButton onClick={(e)=>handleClickStartWrite(e)}/> : 
                <CancelButton onClick={(e)=>handleClickCancelWrite(e)}/>}
            </Box>
            {editor.mode !== 'none' &&
                <FormControl sx={{'& > *': { marginY:'5px' }}} fullWidth>
                <TextField
                    id="outlined-multiline-static"
                    label="제목"
                    sx = {{marginY:'5px'}}
                    rows={1}
                    value={editor.title}
                    onChange={(e)=> editor.setTitle(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="글쓰기"
                    sx = {{marginY:'5px'}}
                    rows={10}
                    value={editor.text}
                    onChange={(e) => editor.setText(e.target.value)}
                    multiline
                />
                <FormHelperText sx={{color: red[900]}}>{formMessage}</FormHelperText>
                <Box sx={{textAlign : 'right'}}>
                    {editor.mode === 'write' && <Button
                        variant="contained"
                        onClick={(e)=>handleClickSendWrite(e)}
                    >작성</Button>}
                    {editor.mode === 'edit' && <Button
                        variant="contained"
                        onClick={(e)=>handleClickEditWrite(e, editor.contents.id)}
                    >편집완료</Button>}     
                </Box>
                </FormControl>
            }
        </Box>
    );
};

export default Editor;