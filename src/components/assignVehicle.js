import React from "react";
import Table from "@mui/material/Table";
import { InputLabel, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import Header from "./header";
import axios from "axios";
import { loadAllVehicles } from '../util/apiCalls';
import { loadDeliveries } from '../util/apiCalls';
import { assignVehicle } from '../util/apiCalls';

function createData(destinationFrom, destinationTo, distance) {
    return { destinationFrom, destinationTo, distance };
}

const rows = [
    createData("Kandy", "Galle", "1.5"),
    createData("Galle", "Kandy", "1.5"),
    createData("Kandy", "Colombo", "2.5"),
    createData("Colombo", "Kandy", "2.5"),
];

// const VehicleLoader = () => {
//     fetch("http://localhost:9091/pickandgo/Vehicle",
//         {
//             method: 'GET',
//             headers: {
//                 Accept: '*/*',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5vZCIsInJvbGUiOlsic2VuZGVyIl0sImV4cCI6MTY0ODQwMDEzNCwiaWF0IjoxNjQ4Mzk5OTU0fQ.0HE43OiAy47TXXqTGJLtnRmVGVVSN5w_4jzJyXq1xL0'
//             }
//             // body: JSON.stringify("jsonData"),
//         })
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 console.log(result)
//             },
//             (error) => {
//                 console.log(error);
//             }
//         )}


const ManageVehicle = () => {
    const [allVehicles, setAllVehicles] = React.useState([]);
    const [allDeliveries, setAllDeliveries] = React.useState([]);
    const [branch, setBranch] = React.useState([]);
    const [vehicle, setVehicle] = React.useState([]);
    const [delivery, setDelivery] = React.useState([]);
    const [pickup_branch_branch_id, set_pickup_branch_branch_id] = React.useState([]);

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
                alert("No Vehicles Available");
            }

            console.log(vehicles);

        }

        const getAllDeliveries = async (branchId) => {
            
            const deliveries = [];

            const response = await loadDeliveries(branchId);

            if (response.data !== true) {
                // const data = response.data;
                alert("Deliveries Available");

                response.data.forEach(delivery => {
                    deliveries.push(delivery);
                    setAllDeliveries(deliveries);
                }
                );

            }
            else {
                alert("No Deliveries Available");
            }


            console.log(deliveries);
        }


        getAllDeliveries(1);
        getAllVehicles();

    }, []);

    // POST Implementation
    const assignVehicles = async () => {

        if (delivery.length === 0 || vehicle.length === 0) {
            alert("Please select a delivery and a vehicle");
        }

        else {
            const vehicle = {
                "deliveryId": delivery,
                "vehicleId": vehicle
            }
        };

        const response = await assignVehicle(vehicle);

        if (response.status !== 200) {
            alert("Vehicle not assigned");
        }
        else {
            alert("Vehicle assigned");
        }
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <div>
                <Header />
                <br />
                <Typography style={{ marginLeft: '20px', marginTop: '75px', marginBottom: '25px' }} variant="h4" gutterBottom component="div" align="center">
                    Assign Vehicle
                </Typography>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Delivery ID</TableCell>
                            <TableCell align="center">Pickup Langitude</TableCell>
                            <TableCell align="center">Pickup Longitude</TableCell>
                            <TableCell align="center">Delivery Langitude</TableCell>
                            <TableCell align="center">Delivery Longitude</TableCell>
                            <TableCell align="center">Vehicle No</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicle.map((vehicle) => (
                            <TableRow key={vehicle.vehicleId}>
                                <TableCell align="center" component="th" scope="row">
                                    {vehicle.vehicleId}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {vehicle.deliveryId}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {vehicle.pickUpLongitute}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {vehicle.vehicleNo}
                                </TableCell>
                                <TableCell align="center">{vehicle.destinationTo}</TableCell>
                                <TableCell align="center">
                                    <InputLabel>Vehicle No</InputLabel>
                                    <Select style={{width:"150px", height: "30px"}}>
                                        <MenuItem value={vehicle}>{vehicle}</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell align="center">
                                    <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={assignVehicles}>
                                        Assign Vehicle
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ManageVehicle;