import { Card, CardContent, CardHeader, Grid, TableContainer, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/header'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Allocation = () => {

    const StyledCard = styled(Card)(({ theme }) => ({

        marginTop: "80px"
    }));

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={6}>
                    <StyledCard sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Deliveries to be picked
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                            <StyledTableCell align="right">Calories</StyledTableCell>
                                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                    <StyledCard sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Deliveries to be deliver
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                            <StyledTableCell align="right">Calories</StyledTableCell>
                                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </StyledCard>
                </Grid>

            </Grid>
        </>
    )
}

export default Allocation