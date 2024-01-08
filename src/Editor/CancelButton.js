import React from "react";
import { Fab } from "@mui/material";
import { Cancel } from "@mui/icons-material";

const CancelButton = (props) => {

    return (
        <Fab color="primary" aria-label="add" onClick={props.onClick}>
            <Cancel />
        </Fab>
    );
};

export default CancelButton;