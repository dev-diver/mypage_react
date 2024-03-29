import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const SignupButton = (props) =>{
    return(
        <Button sx={{margin:'10px'}} 
            variant ="contained"
            onClick = {(e)=>{ window.location.href = '/signup'}}
        >회원가입</Button>
    )
}

const LoginButton = (props) =>{

    return(
        <Button 
            variant ="contained"
            onClick = {(e)=>{ window.location.href = "/login"}}
        >로그인</Button>
    )
}

const LogoutButton = (props) =>{

    const signout = () => {
        props.setLogin(false)
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("userId");
    }

    return(
        <Button 
            variant ="contained"
            onClick = {(e)=>signout()}
        >로그아웃</Button>
    )
}

const Header = (props) => {

    const {login, setLogin}  = props;

    useEffect(() => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, []);

    return (
        <Box sx={{padding: '10px', bgcolor: 'Background', textAlign: 'right'}}>
            {login ?
                <LogoutButton setLogin={setLogin}/> :
                <div><SignupButton/><LoginButton/></div>
            }   
        </Box>
    );
};

export default Header;