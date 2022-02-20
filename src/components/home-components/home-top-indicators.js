import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import SvgIcon from '@mui/material/SvgIcon';
import Icon from '@mui/material/Icon';


function TopIndicators() {

    return (
        <div>
            <Container><br /><br />
                <Grid container spacing={4}>
                    <Grid item xs={3}>

                        <Card sx={{ display: 'flex' , backgroundColor: '#0286cf', color:'white'}} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>

                                    <Typography component="div" variant="h5">
                                        100+
                                    </Typography>
                                    <Typography variant="subtitle1"  component="div">
                                        Total Customers
                                    </Typography>

                                </CardContent>
                            </Box>
                        </Card>

                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ display: 'flex', backgroundColor: '#0286cf', color:'white' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        2000+
                                    </Typography>
                                    <Typography variant="subtitle1"  component="div">
                                        Total Deliveries
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ display: 'flex', backgroundColor: '#0286cf', color:'white' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        50+
                                    </Typography>
                                    <Typography variant="subtitle1"  component="div">
                                        Ongoing Deliveries
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ display: 'flex', backgroundColor: '#0286cf', color:'white' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        25
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        Total Branches
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default TopIndicators;
