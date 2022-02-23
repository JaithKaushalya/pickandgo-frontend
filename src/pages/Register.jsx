import React, { useState } from 'react'
import { LockOpenOutlined } from '@mui/icons-material';
import { Alert, Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Image from "../assets/images/signup.png"
import { register } from '../util/apiCalls';

const Register = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [showError, setShowError] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleRegister = async () => {

        if (password === conPassword) {
            setShowError(false);

            if (!name || !username ||
                !address || !telephone ||
                !password || !conPassword) {
                setErrorMsg("Please fill out all the required fields")
                setShowError(true);

            } else {

                const user = { name, username, address, telephone, password, role: { id: 1 } };
                const res = await register(user);

                if (res.status !== 200) {
                    setErrorMsg(res.error);
                    setShowError(true);

                } else {
                    setShowError(false);

                    sessionStorage.setItem("user", JSON.stringify(res.data.userData));
                    sessionStorage.setItem("token", res.data.token);
                    window.location.href = "/"
                }
            }



        } else {

            setErrorMsg("Passwords mismatched!")
            setShowError(true);
        }
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: "800px 600px",
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOpenOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            autoComplete="address"
                            autoFocus
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="tel"
                            id="telephone"
                            label="Telephone"
                            name="telephone"
                            autoComplete="telephone"
                            autoFocus
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                        <Grid container xs={12}>
                            <Grid item xs={12} sm={6} sx={{ pr: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    onChange={(e) => setConPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        {showError && (<Alert severity="error">
                            {errorMsg}
                        </Alert>)}

                        <Button
                            color="primary"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleRegister}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login" variant="body1">
                                    {"Already an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register