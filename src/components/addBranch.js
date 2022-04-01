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
import { addBranch } from '../util/apiCalls';


const AddBranch = () => {

  const [city, setcity] = React.useState('');
  const [district, setdistrict] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [showError, setShowError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const handleAddBranch = async () => {

    if (!city || !district || !telephone) {
      setErrorMsg("Please fill all the fields");
      setShowError(true);

    } else {
      const branch = {
        city,
        district,
        telephone
      };
      const response = await addBranch(branch);

      if (response.status !== 200) {
        setErrorMsg(response.error);
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
            Branch Management
          </Typography>
        </div>
        <Form>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="manage-branch">Manage Branch</a>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="addBranch">Add Branch</a>
            </div>
          </Wrap>
        </Form>
        <div><br />
          <Typography style={{ fontWeight: '900' }} align="center" variant="h4" gutterBottom component="div">
            Add Branch
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
                      <label>City</label>
                      <TextField
                        required
                        id="outlined-required"
                        label="City"
                        defaultValue=""
                        onChange={(e) => setcity(e.target.value)}
                      />
                      <label>District</label>
                      <TextField
                        required
                        id="outlined-required"
                        label="District"
                        defaultValue=""
                        onChange={(e) => setdistrict(e.target.value)}
                      />
                      <label>Telephone</label>
                      <TextField
                        required
                        id="outlined-required"
                        label="Telephone"
                        defaultValue=""
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button 
                      variant="contained" 
                      color="info"
                      onClick={handleAddBranch} 
                      sx={{ mr: 4 }}>Add Branch</Button>
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

  export default AddBranch;


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
