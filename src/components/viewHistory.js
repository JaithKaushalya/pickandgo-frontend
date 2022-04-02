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
import Header from './header';

function createData(deliveryID, dfrom, dto, payment) {
  return { deliveryID, dfrom, dto, payment };
}

const rows = [
  createData(1, "Dematagoda", "Kandy", "Rs.9000/-"),
  createData(2, "Hatton", "Nuwara Eliya", "Rs.5500/-"),
  createData(3, "Ginigathhena", "Nuwara Eliya", "Rs.5000/-"),
  createData(4, "Hiripitiya", "Galle", "Rs.14500/-"),
  createData(5, "Peradeniya", "Hatton", "Rs.5000/-"),
];

const ViewHistory = () => {

  const [allHistory, setAllHistory] = React.useState([]);


  React.useEffect(() => {

    const getAllHistory = async () => {
      const histories = [];

      const response = await getBranchHistory();

      response.data.forEach(history => {
        if (delivery.trackdelivery.deliver === 1) {
          histories.push(history);
        }

        setAllHistory(histories);

      });

    }

    console.log(histories);
    getAllHistory();

  }, []);


  return (
    <div>
      <Header />
      <Typography style={{ fontWeight: '900', marginTop: '150px', marginBottom: '25px' }} align="center" variant="h4" gutterBottom component="div">
        Delivery History
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery ID</TableCell>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Pickup Langitude</TableCell>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Pickup Longitude</TableCell>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery Langitude</TableCell>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery Longitude</TableCell>
              <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.deliveryID}</TableCell>
                <TableCell align="center">{row.dfrom}</TableCell>
                <TableCell align="center">{row.dto}</TableCell>
                <TableCell align="center">{row.dfrom}</TableCell>
                <TableCell align="center">{row.dto}</TableCell>
                <TableCell align="center">{row.payment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// return (
//   <>
//     <div>
//     <Header />
//     <br />
//       <Typography style={{ fontWeight: '900', marginTop: '100px', marginBottom: '25px' }} align="center" variant="h4" gutterBottom component="div">
//         Delivery History
//       </Typography>
//     </div>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery ID</TableCell>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Pickup Langitude</TableCell>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Pickup Longitude</TableCell>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery Langitude</TableCell>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Delivery Longitude</TableCell>
//             <TableCell style={{ fontWeight: '900', fontSize: 18 }} align="center">Payment</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell align="center">{row.deliveryID}</TableCell>
//               <TableCell align="center">{row.dfrom}</TableCell>
//               <TableCell align="center">{row.dto}</TableCell>
//               <TableCell align="center">{row.dfrom}</TableCell>
//               <TableCell align="center">{row.dto}</TableCell>
//               <TableCell align="center">{row.payment}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </>
// );

export default ViewHistory;

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
