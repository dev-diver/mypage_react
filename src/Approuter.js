import React from "react";
import "./index.css";
import App from './App';
import Login from "./Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Typography, Box } from "@mui/material";

function AppRouter() {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;