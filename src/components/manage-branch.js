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
import { loadAllBranches } from '../util/apiCalls';
import { deleteBranch } from '../util/apiCalls';
import BranchService from "../services/BranchService";

function createData(branchId, city, district, telephone) {
  return { branchId, city, district, telephone };
}

const rows = [
  createData(2, "Peradeniya", "Kandy", "075 820 4216"),
  createData(3, "Hatton", "Nuwara Eliya", "054-1234567"),
  createData(4, "Dehiwela", "Colombo", "075 820 4216"),
];

const pages = ['Add Branch', 'Manage Branch'];
const pageRouteLinks = ['/addBranch', '/manage-branch'];

// const [allBranches, setAllBranches] = React.useState([]);

// const BranchLoader = () => {
//   fetch("http://localhost:9091/pickandgo/Branch",
//     {
//       method: 'GET',
//       headers: {
//         Accept: '*/*',
//         'Content-Type': 'application/json',
//         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5vZCIsInJvbGUiOlsic2VuZGVyIl0sImV4cCI6MTY0ODQwMDEzNCwiaWF0IjoxNjQ4Mzk5OTU0fQ.0HE43OiAy47TXXqTGJLtnRmVGVVSN5w_4jzJyXq1xL0'
//       }
//       // body: JSON.stringify("jsonData"),
//     })
//     .then(res => res.json())
//     .then(
//       (result) => {
//         console.log(result)
//       },
//       (error) => {
//         console.log(error);
//       }
//     )
// }

// Manage Branch Class

// function ManageBranch() {

// constructor(props) {
//   super(props);
//   this.state = {
//     branches: []
//   }
// } 

// componentDidMount() {
//   BranchService.getBranches().then((res) => {
//     this.setState({
//       branches: res.data
//     })
//   });
// }

// return (
//   <div>
//     <Header pages={pages} pageRouteLinks={pageRouteLinks} />
//     <div style={{ marginTop: '75px' }}>
//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell align="center">Branch Id</TableCell>
//               <TableCell align="center">City</TableCell>
//               <TableCell align="center">District</TableCell>
//               <TableCell align="center">Telephone</TableCell>
//               <TableCell align="center">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((branch) => (
//               <TableRow
//                 key={branch.branchId}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell align="center">{branch.branchId}</TableCell>
//                 <TableCell align="center">{branch.city}</TableCell>
//                 <TableCell align="center">{branch.district}</TableCell>
//                 <TableCell align="center">{branch.telephone}</TableCell>
//                 <TableCell align="center">
//                   <div>
//                     <a style={{ textDecoration: 'none', color: 'Black', width: '80px', borderRadius: '10px', backgroundColor: '#dc3545', padding: '10px', paddingLeft: '30px', paddingRight: '30px' }} align="center" href="#">Delete</a>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))
//             }
//             {/* {allBranches.length === 0 && <TableCell align="center">No Data to Show</TableCell>} */}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   </div>
// )

// }

const ManageBranch = () => {

  const [allBranches, setAllBranches] = React.useState([]);

  // const handleBranch = async (personId) => {
  //   const allocation = {
  //     branchId: setAllBranches.branchID,
  //     branchPersonId: personId
  //   }
  // }

  React.useEffect(() => {

    const getAllBranches = async () => {
      // const response = await loadAllBranches();
      // setAllBranches(response.data);

      const branches = [];

      const response = await loadAllBranches();
     
      if (response.data !== true) {
        // alert("Allocation successful.");
        // window.location.reload();

        response.data.forEach(branch => {
          branches.push(branch);
          setAllBranches(branches);
        });

      } else {
        alert("Allocation Failed.");
        // sessionStorage.setItem("user", JSON.stringify(res.data.userData));
        // sessionStorage.setItem("token", res.data.token);

      }

      console.log(branches);

      // response.data.forEach(branch => {
      //   branches.push(branch)


      //   setAllBranches(branches);
      // }
      // )
    }

    const deleteBranch = async (branchId) => {
      const response = await deleteBranch(branchId);
      if (response.data !== true) {
        alert("Deletion successful.");
        // window.location.reload();

      } else {
        alert("Deletion Failed.");
      }
      window.location.reload();
    }


    getAllBranches();

  }, []);

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
            {allBranches.map((branch) => (
              <TableRow
                key={branch.branchId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{branch.branchId}</TableCell>
                <TableCell align="center">{branch.city}</TableCell>
                <TableCell align="center">{branch.district}</TableCell>
                <TableCell align="center">{branch.telephone}</TableCell>
                <TableCell align="center">
                <Button 
                      variant="contained" 
                      color="info"
                      align="center"
                      // onClick={deleteBranch()} 
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
