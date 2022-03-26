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
import axios from "axios";
import { Properties } from "../properties";

function createData(branchID, city, district, telephone) {
  return { branchID, city, district, telephone };
}

const rows = [
  createData(2, "Peradeniya", "Kandy", "075 820 4216"),
  createData(3, "Hatton", "Nuwara Eliya", "054-1234567"),
  createData(4, "Dehiwela", "Colombo", "075 820 4216"),
];

const pages = ['Add Branch', 'Manage Branch'];
const pageRouteLinks = ['/addBranch', '/manage-branch'];

// Manage Branch Class

class ManageBranch extends Component {

// constructor(props) {
//    super(props);
//    this.state = {
//      error: null,
//      isLoaded: false,
//      branches: []
//    };
//    componentDisMount();
//  }

//  componentDisMount() {
//    const res = axios.get(`${Properties.baseUrl}/branch`);
//    console.log(res);
//    this.setState({
//      isLoaded: true,
//      branches: res.branches
//    }
//    );
//  }

  render() {
//    const { error, isLoaded, branches } = this.state;
//    if (error) {
//      return <div>Error: {error.message}</div>;
//    } else if (!isLoaded) {
//      return <div>Loading...</div>;
//    } else {
    return (
      <>
        <div>
        <Header />
        <br />
          <Typography style={{ marginLeft: '20px', marginTop: '75px', marginBottom: '25px' }} variant="h4" gutterBottom component="div">
            Branch Management
          </Typography>
        </div>
        <Container>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="#">Manage Branch</a>
            </div>
          </Wrap>
          <Wrap>
            <div>
              <a style={{ textDecoration: 'none', color: 'white' }} href="#">Add Branch</a>
            </div>
          </Wrap>
        </Container>
        <div><br />
          <Typography style={{ fontWeight: '900' }} align="center" variant="h4" gutterBottom component="div">
            Manage Branch
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Branch ID</TableCell>
                <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Name</TableCell>
                <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">District</TableCell>
                <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Telephone</TableCell>
                <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((branch) => (
                <TableRow
                  key={branch.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{branch.branchID}</TableCell>
                  <TableCell align="center">{branch.city}</TableCell>
                  <TableCell align="center">{branch.district}</TableCell>
                  <TableCell align="center">{branch.telephone}</TableCell>
                  <TableCell align="center">
                    <div>
                      <a style={{ textDecoration: 'none', color: 'Black', width: '80px', borderRadius: '10px', backgroundColor: '#dc3545', padding: '10px', paddingLeft: '30px', paddingRight: '30px' }} align="center" href="#">Delete</a>
                    </div>
                  </TableCell>
                </TableRow>
              ))
  }
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
//  }
}

}

export default ManageBranch;

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
