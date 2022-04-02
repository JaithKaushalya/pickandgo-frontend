import React, { Component } from "react";
import Table from '@mui/material/Table';
import { Typography } from "@mui/material"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { Container, Grid, Card, CardContent, Button, TextField, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Header from './header';
import { useState } from 'react'
import { addVehicle } from '../util/apiCalls';


const AddVehicle = () => {

    const [type, setType] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [status, setStatus] = useState('');
    const [showError, setShowError] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleAddVehicle = async () => {

        if (!type || !vehicleNo) {
            alert("Please fill all the fields");
            setShowError(true);
        }
        else {
            const vehicle = {
                type,
                vehicleNo,
                status
            };
            const response = await addVehicle(vehicle);

            if (response.status !== 200) {
                alert(response.error);
                setShowError(true);

            } else {
                setShowError(false);

            }

            
            window.location.reload();
        }
    };


    return (
        <div>
        <Header />
        <div><br />
          <Typography style={{ marginLeft: '20px', marginTop: '75px', marginBottom: '25px' }} variant="h4" gutterBottom component="div">
            Vehicle Management
          </Typography>
        </div>
        <Form>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="manage-vehicle">Manage Vehicle</a>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="addVehicle">Add Vehicle</a>
            </div>
          </Wrap>
        </Form>
        <div><br />
          <Typography style={{ fontWeight: '900' }} align="center" variant="h4" gutterBottom component="div">
            Add Vehicle
          </Typography>
        </div>
        <Container><br /><br />
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 2, width: '100ch' },
                    }}
                    noValidate
                    autoComplete="off"

                  >
                    <br /><br />

                    <div>
                      <label>Vehicle Type</label>
                      <TextField
                        required
                        id="outlined-required"
                        label="Type"
                        defaultValue=""
                        onChange={(e) => setType(e.target.value)}
                      />
                      <label>Vehicle Number</label>
                      <TextField
                        required
                        id="outlined-required"
                        label="No"
                        defaultValue=""
                        onChange={(e) => setVehicleNo(e.target.value)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button 
                      variant="contained" 
                      color="info"
                      onClick={handleAddVehicle} 
                      sx={{ mr: 4 }}>Add Vehicle</Button>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
  );
  }

  export default AddVehicle;


  const Form = styled.div`
  display: flex;
  flex-direction: row;
`

  const Wrap = styled.div`
    color: white;
    cursor: pointer;
    padding: 15px;
    background: #b86de5;
    color: #fff;
    width: 175px;
    height: 25px;
    display: flex;
    margin-left: 20px;
    flex-direction: row;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    border-radius: 10px;
    transition: all 250ms;


        &:hover {
          background: #b86dff;
        }

    }`