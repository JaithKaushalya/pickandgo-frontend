import { Box, Button, Card, CardContent, CardHeader, Dialog, DialogTitle, Grid, Modal, TableContainer, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/header'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { allocatePerson, loadAllDeliveries, loadAllPerson } from '../util/apiCalls';

const Allocation = () => {

    const [toBePickedUp, setToBePickedUp] = React.useState([]);
    const [toBeDelivered, setToBeDelivered] = React.useState([]);
    const [allPerson, setAllPerson] = React.useState([]);
    const [selectedDelivery, setSelectedDelivery] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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

    const handleAllocatePickups = async (personId) => {
        const allocation = {
            deliveryId: selectedDelivery.deliveryId,
            deliveryPersonId: personId,
            nextStatus: "pick_up_allocated"

        }

        const res = await allocatePerson(allocation);
        if (res.data === true) {
            alert("Allocation successful.");
            window.location.reload();
        } else {
            alert("Allocation Failed.");

        }
    }

    React.useEffect(() => {

        const getAllDeliveries = async () => {

            const delivers = [];
            const pickups = [];

            const res = await loadAllDeliveries();

            res.data.forEach(delivery => {
                if (!delivery.trackDelivery) {
                    pickups.push(delivery)

                } else if (delivery.trackDelivery.pickedUp === 1 && delivery.trackDelivery.deliver === 0) {
                    delivers.push(delivery)
                }

                setToBePickedUp(pickups);
                setToBeDelivered(delivers)
            })
        }

        const getAllPerson = async () => {
            const res = await loadAllPerson();
            setAllPerson(res.data);

        }

        getAllDeliveries();
        getAllPerson();

    }, [])


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
                                            <StyledTableCell align="center">Delivery Id</StyledTableCell>
                                            <StyledTableCell align="center">date</StyledTableCell>
                                            <StyledTableCell align="center">Sender</StyledTableCell>
                                            <StyledTableCell align="center">Receiver</StyledTableCell>
                                            <StyledTableCell align="center">Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {toBePickedUp.map((delivery) => (
                                            <StyledTableRow key={delivery.deliveryId}>
                                                <StyledTableCell align="center">
                                                    {delivery.deliveryId}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{delivery.date}</StyledTableCell>
                                                <StyledTableCell align="center">{delivery.sender.name}</StyledTableCell>
                                                <StyledTableCell align="center">{delivery.receiver.name}</StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <Button variant="contained" onClick={() => {
                                                        setSelectedDelivery(delivery)
                                                        handleOpen()
                                                    }}> Allocate </Button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                        {toBePickedUp.length === 0 && <StyledTableCell align="center">No Data to Show</StyledTableCell>}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Select a Person
                                    </Typography>

                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="center">Person Id</StyledTableCell>
                                                <StyledTableCell align="center">Name</StyledTableCell>
                                                <StyledTableCell align="center">Contact No</StyledTableCell>
                                                <StyledTableCell align="center">Status</StyledTableCell>
                                                <StyledTableCell align="center">Action</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {allPerson.map((person) => (
                                                <StyledTableRow key={person.deliveryPersonId}>
                                                    <StyledTableCell align="center">
                                                        {person.deliveryPersonId}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{person.name}</StyledTableCell>
                                                    <StyledTableCell align="center">{person.contactNo}</StyledTableCell>
                                                    <StyledTableCell align="center">{person.status}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <Button disabled={person.status === "Available" ? false : true} variant="contained" onClick={() => {
                                                            handleAllocatePickups(person.deliveryPersonId)
                                                        }}> Select </Button>

                                                    </StyledTableCell>


                                                </StyledTableRow>
                                            ))}
                                            {toBePickedUp.length === 0 && <StyledTableCell align="center">No Data to Show</StyledTableCell>}
                                        </TableBody>
                                    </Table>

                                </Box>
                            </Modal>

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
                                            <StyledTableCell align="center">Delivery Id</StyledTableCell>
                                            <StyledTableCell align="center">date</StyledTableCell>
                                            <StyledTableCell align="center">Sender</StyledTableCell>
                                            <StyledTableCell align="center">Receiver</StyledTableCell>
                                            <StyledTableCell align="center">Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                            </StyledTableRow>
                                        ))} */}
                                        {toBeDelivered.length === 0 && <StyledTableCell align="center">No Data to Show</StyledTableCell>}
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