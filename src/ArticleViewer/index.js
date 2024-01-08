import React from "react";
import { Paper, Divider, Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const ArticleViewer = (props) => {

    const Article = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 'normal',
        lineHeight: '25px',
        padding: '20px',
        whiteSpace: 'pre-line'
    }));

    return (
        props.contents &&
        <Article
            sx={{marginY: "10px"}}
            elevation={1}
        >
        <Box sx={{marginY: "10px"}}>
            {props.contents.title}
        </Box>
        <Divider/>
        <Box sx={{marginTop: "10px"}}>
            {props.contents.text}
        </Box>
        </Article>
    );
};

export default ArticleViewer;