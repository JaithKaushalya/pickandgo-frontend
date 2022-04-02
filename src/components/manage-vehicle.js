import React, { Component } from "react";
import Table from '@mui/material/Table';
import { Typography } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Header from './header';
import Button from '@mui/material/Button';
import axios from "axios";
import { Properties } from "../properties";
import { loadAllVehicles } from '../util/apiCalls';
import { deleteVehicle } from '../util/apiCalls';


const VehicleManagement = () => {


    const [vehicle, setVehicle] = React.useState([]);

    React.useEffect(() => {

        const getAllVehicles = async () => {

            const vehicles = [];

            const response = await loadAllVehicles();

            if (response.status === 200) {

                response.data.forEach(element => {

                    vehicles.push(element);
                });

                setVehicle(vehicles);
            }

            else {
                alert(response.error);
            }

            console.log(vehicles);


        }

        const deleteVehicle = async (vehicleId) => {
            const response = await deleteVehicle(vehicleId);
            
            if (response.data === true) {
                alert("Vehicle deleted successfully");
            }

            else {
                alert(response.error);
            }

            window.location.reload();

        }

        getAllVehicles();



    }, []);

    return (
        <>
            <div>
                <Header />
                <br />
                <Typography style={{ marginLeft: '20px', marginTop: '75px', marginBottom: '25px' }} variant="h4" gutterBottom component="div">
                    Vehicle Management
                </Typography>
            </div>
            <Container>
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
            </Container>
            <div><br />
                <Typography style={{ fontWeight: '900' }} align="center" variant="h4" gutterBottom component="div">
                    Manage Vehicle
                </Typography>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Vehicle ID</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Type</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Vehicle No</TableCell>
                            <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicle.map((vhl) => (
                            <TableRow
                                key={vhl.vehicleId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{vhl.vehicleId}</TableCell>
                                <TableCell align="center">{vhl.type}</TableCell>
                                <TableCell align="center">{vhl.vehicleNo}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        color="info"
                                        align="center"
                                        onClick = {() => deleteVehicle(vhl.vehicleId)}
                                        sx={{ mr: 4 }}>Delete</Button>
                                    {/* <div>
                            <a style={{ textDecoration: 'none', color: 'Black', width: '80px', borderRadius: '10px', backgroundColor: '#dc3545', padding: '10px', paddingLeft: '30px', paddingRight: '30px' }} align="center" href="#">Delete</a>
                          </div> */}
                                </TableCell>
                            </TableRow>
                        ))
                        }
                        {/* {allBranches.length === 0 && <TableCell align="center">No Data to Show</TableCell>} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
    //  }
}

export default VehicleManagement;

const Container = styled.div`
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
