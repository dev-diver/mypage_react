import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from '../api.js';
import { FormHelperText } from '@mui/material';
import { red } from "@mui/material/colors";

const defaultTheme = createTheme();

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const signin = (userDTO)=> {
      api.post('/auth/signup', userDTO)
          .then((response) => {
            if (response.status === 200) {
                const token = response.data.token;
                const userId = response.data.id;
                if(token){
                  localStorage.setItem("ACCESS_TOKEN", token);
                  localStorage.setItem("userId", userId );
                  window.location.href = "/";
                }
            }
            //여기
          }).catch((e)=>{
              setEmail('');
              setPassword('');
              if(e?.response?.data?.error){
                setFormMessage(e.response.data.error);
              }else{
                setFormMessage('서버 연결 이상');
              }
          })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      signin({userId : email, password: password});
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원 가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e)=>setEmail(e.target.value)}
                  onClick={(e)=>setFormMessage('')}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  onClick={(e)=>setFormMessage('')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <FormHelperText sx={{color: red[900]}}>{formMessage}</FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원 가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  돌아가기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}