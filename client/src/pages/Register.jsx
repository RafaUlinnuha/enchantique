import React from 'react'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div className="grid grid-cols-2">
        <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-100 h-screen bg-cover flex items-center justify-center">
            <form action="" className="p-10 xl:w-5/12 bg-white shadow-xl rounded-xl">
                <span className="text-xl font-semibold">Join Our Community</span>
                <h1 className="mt-1 text-sm">Register your Account</h1>
                <div className="mt-12">
                    <TextField fullWidth label="Username" variant="outlined" size="small" />
                </div>
                <div className="mt-4">
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
                    <Button variant="contained" size="small">Register</Button>
                    <Link to="/login">
                        <Button fullWidth variant="outlined" size="small">
                            Login
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
        <div className="h-screen flex items-center justify-center mx-auto w-[80%]">
            <img src="./src/assets/register-right.png" />
        </div>
    </div>
  )
}

export default Register