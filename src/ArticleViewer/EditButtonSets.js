import React from "react";
import { Box, Fab } from "@mui/material";
import { Cancel, Edit } from "@mui/icons-material";

const EditButtonSets = (props) => {

    return (
        <Box sx={{ textAlign:'right', '& > *': { mx : '5px'}}}>
        <Fab color="primary" aria-label="add" onClick={(e)=>props.editMode(true)}>
            <Edit />
        </Fab>
        <Fab color="secondary" aria-label="add" onClick={(e)=>props.deleteArticle()}>
            <Cancel />
        </Fab>
        </Box>
    );
};

export default EditButtonSets;