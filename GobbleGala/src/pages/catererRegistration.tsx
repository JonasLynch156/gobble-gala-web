import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { RegisterButton } from '../components/registerButton';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export const CatererRegistration = () => {
    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    };
  return (
    <form>
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <TextField
        label="Username"
        name="username"
        value="Bello!"
      />
      <TextField
        label="Email"
        name="email"
        value="Bello!"
      />
      <TextField
        label="Password"
        name="password"
        value="Bello!"
      />
      <RegisterButton text='Register' onClick={() => handleClick("/cater-dashboard")}/>
    </form>
  );
}