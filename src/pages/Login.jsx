import { Button, Stack, TextField } from '@mui/material';
import React from 'react';

function Login() {
  return (      
    <div className='login-wrapper'>
      <div className='login'>
        <Stack spacing={2}>                
          <TextField 
            id="outlined-basic" 
            label="Gmail" 
            variant="outlined" 
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
          />
          <Button 
            variant="contained" 
            color="success">
            Sign In
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
