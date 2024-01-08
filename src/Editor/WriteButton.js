import React from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

const WriteButton = (props) => {

    return (
        <Fab color="primary" aria-label="add" onClick={props.onClick}>
            <Add />
        </Fab>
    );
};

export default WriteButton;