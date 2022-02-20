import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Grid, Card, CardContent, Button, TextField , Divider} from '@mui/material';

import aboutUs from "../../assets/images/aboutUs.png";
import makeRequest from "../../assets/images/makeRequest.png";

import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';


function MakeRequest() {

    return (
        <div>
            <Container><br /><br /><br /><br /><br /><br />

                <Card>
                    <CardContent>

                        <Grid container spacing={4}>

                            <Grid item xs={12}>

                                <Typography variant="h6" gutterBottom component="div">
                                    Make Your request Now.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This will be an Amaizing Experience.<br />
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>



                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <Typography variant="body2" gutterBottom>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Enter Sender Details here.<br />
                                        </Typography>
                                        <Divider variant="middle" />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="TItle"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Full Name"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Pick up location"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Mobile No"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Nearest Branch"
                                            defaultValue=""
                                        />
                                    </div>

                                    <br/><br/>

                                    <div>
                                        <Typography variant="body2" gutterBottom>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Enter Reciever Details here.<br />
                                        </Typography>
                                        <Divider variant="middle" />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Title"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Full Name"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Drop Off location"
                                            defaultValue=""
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Mobile No"
                                            defaultValue=""
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant="contained" color="info" sx={{ mr: 4 }}>Make Request</Button>


                                    </div>

                                </Box>



                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 400,
                                        display: 'block',
                                        //   maxWidth: '1500',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={makeRequest}
                                    alt={"aboutUs"}
                                />
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>


            </Container>
        </div>

    );
}

export default MakeRequest;
