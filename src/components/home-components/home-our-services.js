import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

import ourServices from "../../assets/images/services.PNG";

import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';


function OurServices() {

    return (
        <div>
            <Container><br /><br /><br /><br /><br /><br />
                <Grid container spacing={4}>
                    <Grid item xs={6}>

                        <Box
                            component="img"
                            sx={{
                                height: 380,
                                display: 'block',
                                //   maxWidth: '1500',
                                overflow: 'hidden',
                                width: '100%',
                            }}
                            src={ourServices}
                            alt={"aboutUs"}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom component="div">
                            Our Services
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            We are Pick {"&"} Go Deliveries
                        </Typography><br />
                        <Typography variant="body2" gutterBottom>
                            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.<br/><br/>

                            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                    </Grid>
                </Grid>
            </Container><br/><br/>
        </div>

    );
}

export default OurServices;
