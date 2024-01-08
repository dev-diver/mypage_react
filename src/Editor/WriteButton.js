import React from "react";
import { Fab } from "@mui/material";
import { Edit } from "@mui/icons-material";

const WriteButton = (props) => {

    return (
        <Fab color="primary" aria-label="add" onClick={props.onClick}>
            <Edit />
        </Fab>
    );
};

export default WriteButton;