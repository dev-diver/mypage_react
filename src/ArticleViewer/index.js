import React, { useState, useEffect } from "react";
import { Paper, Divider, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import EditButtonSets from "./EditButtonSets";
import api from '../api.js';

const ArticleViewer = (props) => {

    const Article = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 'normal',
        lineHeight: '25px',
        padding: '20px',
        whiteSpace: 'pre-line',
        margin: '10px 0'
    }));
    
    //delete
    const [loading, setLoading] = useState(true);
    const [formMessage, setFormMessage] = useState('');
    const [canEdit, setCanEdit] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("userId") == props.contents?.userId){
            setCanEdit(true);
        }else{
            setCanEdit(false);
        }
    }, [props.login]);

    const { setWriteMode, afterAction } = props;

    const editMode = () => {
        props.editMode(props.contents.title, props.contents.text);
    }

    const deleteArticle = (id) => {
        setLoading(true);
        api.delete(`/api/article/${id}`)
        .then((response) => {
            //게시판 재로딩
            setWriteMode(false);
            afterAction('delete');
        })
        .catch((error) => {
            setFormMessage("삭제 실패"); // Update error state
        });
        setLoading(false);
    }


    return (
        props.contents?.text &&
        <Box>
            <Article elevation={1}>
            <Box sx={{marginY: "10px"}}>
                {props.contents.title}
            </Box>
            <Divider/>
            <Box sx={{marginTop: "10px"}}>
                {props.contents.text}
            </Box>
            </Article>
            {canEdit ?
             <EditButtonSets
                editMode={editMode}
                deleteArticle={(e)=>deleteArticle(props.contents.id)}
            />:
            <Box sx={{height:'56px'}}></Box>
            }
        </Box>
    );
};

export default ArticleViewer;