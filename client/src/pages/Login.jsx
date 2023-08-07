import React from 'react'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, createTheme } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <div className="grid grid-cols-2">
        <div className="h-screen flex items-center justify-center mx-auto w-[80%]">
            <img src="./src/assets/login-right.png" />
        </div>
        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen bg-cover flex items-center justify-center">
            <form action="" className="p-10 xl:w-5/12 bg-white shadow-xl rounded-xl">
                <span className="text-xl font-semibold">Welcome Back</span>
                <h1 className="mt-1 text-sm">Log In to your Account</h1>
                <div className="mt-12">
                    <TextField fullWidth label="Email" type="email" variant="outlined" size="small" />
                </div>
                <div className="mt-4">
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div className="grid mt-10 text-center gap-2 w-full">
                    <Button variant="contained" size="small">Login</Button>
                    <Link to="/register">
                        <Button fullWidth variant="outlined" size="small">
                            Register
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login