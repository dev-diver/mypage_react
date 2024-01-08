import React from "react";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const SignupButton = (props) =>{
    return(
        <Button sx={{margin:'10px'}} variant ="contained">회원가입</Button>
    )
}

const LoginButton = (props) =>{
    return(
        <Button variant ="contained">로그인</Button>
    )
}

const LogoutButton = (props) =>{
    return(
        <Button variant ="contained">로그아웃</Button>
    )
}

const Header = (props) => {

    

    return (
        <Box sx={{padding: '10px', bgcolor: 'Background', textAlign: 'right'}}>
            {props.login ?
                <LogoutButton/> :
                <div><SignupButton/><LoginButton/></div>
            }   
        </Box>
    );
};

export default Header;