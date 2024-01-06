import React from "react";

const LoginButton = (props) =>{
    return(
        <button>로그인</button>
    )
}

const LogoutButton = (props) =>{
    return(
        <button>로그아웃</button>
    )
}

const Header = (props) => {

    return (
        <div>
            <LoginButton/>
        </div>
    );
};

export default Header;