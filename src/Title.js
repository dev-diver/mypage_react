import { Box, Typography } from "@mui/material";
import React from "react";

const Title = (props) => {

    return (
        <Box sx={{marginTop : '30px'}}>
            <Typography variant="h3" gutterBottom>
                게시판
            </Typography>
        </Box>
    );
};

export default Title;