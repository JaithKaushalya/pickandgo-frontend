import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
    Container, Grid, Card, CardContent, Button, TextField, Divider, InputAdornment, IconButton,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { DataGrid } from '@mui/x-data-grid';

import MapComponent from "./map-component";



function MakeRequest() {

    const [rows, setTableData] = React.useState([]);

    function createData(id, item, quantity, weight) {
        return { id, item, quantity, weight };
    }

    const handleTableDeleteClick = (event, cellValue) => {
        let rowData = Object.assign([], rows);
        const filteredRows = rowData.filter(singleRow => {
            return singleRow.id !== cellValue.row.id;
        });
        filteredRows.forEach((obj, i) => {
            obj.id = (i + 1)
        });
        setTableData(filteredRows);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'item', headerName: 'Item', width: 130 },
        { field: 'quantity', headerName: 'Qty', width: 130 },
        { field: 'weight', headerName: 'Weight', width: 90 },
        {
            field: "delete",
            headerName: 'Action',
            renderCell: (cellValues) => {
                return (
                    <DeleteIcon
                        variant="contained"
                        color="warning"
                        onClick={(event) => {
                            handleTableDeleteClick(event, cellValues);
                        }}
                    >
                        Delete
                    </DeleteIcon>
                );
            }
        }
    ];

    // addTool dialog ////////////
    const [openAddItemDialog, setOpenAddItem] = React.useState(false);
    const [addItemValues, setAddItemValues] = React.useState({
        Item: "",
        Qty: 0,
        Weight: "",
        Dimensions: "",
        helperTexts: {
            helperTextItem: "",
            helperTextqty: "",
            helperTextWeight: "",
            helperTextDimensions: "",
        },
        errors: {
            isErrorItem: false,
            isErrorWeight: false,
            isErrorQty: false,
            isErrorDimenrions: false,
        }
    });

    const handleClickOpen = () => {
        setOpenAddItem(true);
    };

    const handleCloseAddItem = () => {
        setOpenAddItem(false);
        setAddItemValues({
            ...addItemValues,
            Item: "",
            Qty: 0,
            Weight: "",
            Dimensions: "",
            helperTexts: {
                helperTextItem: "",
                helperTextqty: "",
                helperTextWeight: "",
                helperTextDimensions: "",
            },
            errors: {
                isErrorItem: false,
                isErrorWeight: false,
                isErrorQty: false,
                isErrorDimenrions: false,
            }
        });
    };

    const handleSuccessAddItem = () => {
        if (addNewItemValidator()) {
            let rowData = Object.assign([], rows);
            rowData.push(createData((rows.length + 1), addItemValues.Item, addItemValues.Qty, addItemValues.Weight));
            setTableData(rowData);
            handleCloseAddItem();
        }
    }

    const handleTextChange = (event) => {
        setAddItemValues({
            ...addItemValues,
            [event.target.name]: event.target.value,
        });
    }

    const addNewItemValidator = () => {
        var isValid = true;
        var helperTexts = {};
        var errors = {};
        if (addItemValues.Item == "") {
            isValid = false;
            helperTexts.helperTextItem = "This is required";
            errors.isErrorItem = true;
        }
        if (addItemValues.Weight == "") {
            isValid = false;
            helperTexts.helperTextWeight = "This is required";
            errors.isErrorWeight = true;
        }
        if (addItemValues.Qty <= 0) {
            isValid = false;
            helperTexts.helperTextQty = "This is required";
            errors.isErrorQty = true;
        }
        if (addItemValues.Dimensions == "") {
            isValid = false;
            helperTexts.helperTextDimensions = "This is required";
            errors.isErrorDimensions = true;
        }
        setAddItemValues({
            ...addItemValues,
            helperTexts: helperTexts,
            errors: errors
        });
        return isValid;
    }

    //  confirm dialog box
    const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
    const handleConfirmClose = () => {
        setOpenConfirmDialog(false);
    }

    //////////////////////////////
    const [mainValues, setMainValues] = React.useState({
        SFName: "",
        SLName: "",
        SMobile: "",
        RFName: "",
        RLName: "",
        RMobile: "",
        PickUp: "",
        PLat: 6.927079,
        PLng: 79.861244,
        DropOff: "",
        DLat: 7.291418,
        DLng: 80.636696,
        NbPickUp: "",
        NbDropOff: "",
        helperTexts: {
            helperTextSFName: "",
            helperTextSLName: "",
            helperTextSMobile: "",
            helperTextRFName: "",
            helperTextRLName: "",
            helperTextRMobile: "",
            helperTextPickUp: "",
            helperTextDropOff: "",
            helperTextNbPickUp: "",
            helperTextNbDropOff: "",
            helperTextTable: ""
        },
        errors: {
            isErrorSFName: false,
            isErrorSLName: false,
            isErrorSMobile: false,
            isErrorRFName: false,
            isErrorRLName: false,
            isErrorRMobile: false,
            isErrorPickUp: false,
            isErrorDropOff: false,
            isErrorNbPickUp: false,
            isErrorNbDropOff: false,
        }
    });

    const handleMainTextChange = (event) => {
        setMainValues({
            ...mainValues,
            [event.target.name]: event.target.value,
        });
    }

    const handleMakeRequest = () => {
        if (addMainFrameValidator()) {
            setOpenConfirmDialog(true);
        }
    }

    const completeMakeRequest = () => {

        // CREATE BACK END CALL HERE    
    }

    const addMainFrameValidator = () => {
        var isValid = true;
        var helperTexts = {};
        var errors = {};
        if (mainValues.SFName == "") {
            isValid = false;
            helperTexts.helperTextSFName = "This is required";
            errors.isErrorSFName = true;
        }
        if (mainValues.SLName == "") {
            isValid = false;
            helperTexts.helperTextSLName = "This is required";
            errors.isErrorSLName = true;
        }
        if (mainValues.SMobile == "") {
            isValid = false;
            helperTexts.helperTextSMobile = "This is required";
            errors.isErrorSMobile = true;
        }
        if (mainValues.RFName == "") {
            isValid = false;
            helperTexts.helperTextRFName = "This is required";
            errors.isErrorRFName = true;
        }
        if (mainValues.RLName == "") {
            isValid = false;
            helperTexts.helperTextRLName = "This is required";
            errors.isErrorRLName = true;
        }
        if (mainValues.RMobile == "") {
            isValid = false;
            helperTexts.helperTextRMobile = "This is required";
            errors.isErrorRMobile = true;
        }
        if (mainValues.PickUp == "") {
            isValid = false;
            helperTexts.helperTextPickUp = "This is required";
            errors.isErrorPickUp = true;
        }
        if (mainValues.DropOff == "") {
            isValid = false;
            helperTexts.helperTextDropOff = "This is required";
            errors.isErrorDropOff = true;
        }
        if (mainValues.NbPickUp == "") {
            isValid = false;
            helperTexts.helperTextNbPickUp = "This is required";
            errors.isErrorNbPickUp = true;
        }
        if (mainValues.NbDropOff == "") {
            isValid = false;
            helperTexts.helperTextNbDropOff = "This is required";
            errors.isErrorNbDropOff = true;
        }
        if (rows.length == 0) {
            isValid = false;
            helperTexts.helperTextTable = "No itemas are addedd";
        }

        setMainValues({
            ...mainValues,
            helperTexts: helperTexts,
            errors: errors
        });
        return isValid;
    }

    //  google map integration /////////////////////////////////////////////////

    const [openMapDialog, setOpenMapDialog] = React.useState(false);
    const handleMapClose = () => {
        setOpenMapDialog(false);
    }

    const handleOpenMapDialog = (event) => {
        event.preventDefault();
        setOpenMapDialog(true);
    }

    const handleMapSelect = (state) => {
        setMainValues({
            ...mainValues,
            PickUp: state.pickUp ? state.pickUp : "",
            DropOff: state.dropOff ? state.dropOff : "",
            PLat: state.markerPostion1.lat,
            PLng: state.markerPostion1.lng,
            DLat: state.markerPostion2.lat,
            DLng: state.markerPostion2.lng,
        });

        setOpenMapDialog(false);
    }

    return (
        <div>
            <Container><br /><br /><br /><br /><br /><br />
                <Card>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Make Your request Now.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    This will be an Amaizing Experience.<br />
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <Typography variant="body2" gutterBottom>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Enter Sender Details here.<br />
                                        </Typography>
                                        <Divider variant="middle" />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorSFName}
                                            id="outlined-required"
                                            label="First Name"
                                            defaultValue=""
                                            size="small"
                                            name="SFName"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextSFName}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorSLName}
                                            id="outlined-required"
                                            label="Last Name"
                                            defaultValue=""
                                            size="small"
                                            name="SLName"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextSLName}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorSMobile}
                                            id="outlined-required"
                                            label="Mobile No"
                                            defaultValue=""
                                            size="small"
                                            name="SMobile"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextSMobile}
                                        />
                                    </div>
                                    <br /><br />
                                    <div>
                                        <Typography variant="body2" gutterBottom>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Enter Reciever Details here.<br />
                                        </Typography>
                                        <Divider variant="middle" />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorRFName}
                                            id="outlined-required"
                                            label="First Name"
                                            defaultValue=""
                                            size="small"
                                            name="RFName"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextRFName}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorRLName}
                                            id="outlined-required"
                                            label="Last Name"
                                            defaultValue=""
                                            size="small"
                                            name="RLName"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextRLName}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorRMobile}
                                            id="outlined-required"
                                            label="Mobile No"
                                            defaultValue=""
                                            size="small"
                                            name="RMobile"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextRMobile}
                                        />
                                    </div>
                                    <br /><br />
                                    <div>
                                        <Typography variant="body2" gutterBottom>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Enter Location Details here.<br />
                                        </Typography>
                                        <Divider variant="middle" />
                                        <TextField
                                            required
                                            disabled={true}
                                            error={mainValues.errors.isErrorPickUp}
                                            value={mainValues.PickUp}
                                            id="outlined-required"
                                            label="Pick up location"
                                            defaultValue=""
                                            name="PickUp"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextPickUp}
                                            size="small"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="start">
                                                    <IconButton type="submit" sx={{ p: '5px', marginRight: "-15px" }} aria-label="search"
                                                    >
                                                        <SearchIcon onClick={handleOpenMapDialog} />
                                                    </IconButton>
                                                </InputAdornment>,
                                            }}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorDropOff}
                                            value={mainValues.DropOff}
                                            disabled={true}
                                            id="outlined-required"
                                            label="Drop off location"
                                            defaultValue=""
                                            size="small"
                                            name="DropOff"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextDropOff}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="start">
                                                    <IconButton type="submit" sx={{ p: '5px', marginRight: "-15px" }} aria-label="search"
                                                    >
                                                        <SearchIcon onClick={handleOpenMapDialog} />
                                                    </IconButton>
                                                </InputAdornment>,
                                            }}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorNbPickUp}
                                            id="outlined-required"
                                            label="Nearest Branch to Pic-kup"
                                            defaultValue=""
                                            size="small"
                                            name="NbPickUp"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextNbPickUp}
                                        />
                                        <TextField
                                            required
                                            error={mainValues.errors.isErrorNbDropOff}
                                            id="outlined-required"
                                            label="Nearest Branch to Drop-off"
                                            defaultValue=""
                                            size="small"
                                            name="NbDropOff"
                                            onChange={handleMainTextChange}
                                            helperText={mainValues.helperTexts.helperTextNbDropOff}
                                        />
                                    </div>
                                </Box>

                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" gutterBottom>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Enter Item Details here.<br />
                                </Typography>
                                <Divider variant="middle" /><br />
                                <Button variant="contained" startIcon={<AddCircleIcon />} color="info"
                                    sx={{ mr: 4, mb: 3 }} onClick={handleClickOpen}>Add Item</Button>

                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    sx={{ height: 370 }}
                                />
                                <Typography variant="caption" display="block" gutterBottom sx={{ mt: 1, color: "error.main" }}>
                                    {mainValues.helperTexts.helperTextTable}
                                </Typography>
                                <br /><br />
                                <Button variant="contained" color="success" sx={{ mr: 1, mb: 3 }} >Reset</Button>
                                <Button variant="contained" color="info" sx={{ mr: 1, mb: 3 }} onClick={handleMakeRequest}>Make Request</Button>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </Container>


            <Dialog open={openAddItemDialog} onClose={handleCloseAddItem}>
                <DialogTitle>Add new Item</DialogTitle>
                <DialogContent>
                    <Divider variant="middle" /><br />
                    <DialogContentText>
                        &nbsp;&nbsp;&nbsp;&nbsp;please enter follwoing details to add new Item to be delivered.
                    </DialogContentText>
                    <br />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '20ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                error={addItemValues.errors.isErrorItem}
                                required
                                id="outlined-required"
                                label="Item"
                                defaultValue=""
                                size="small"
                                name="Item"
                                onChange={handleTextChange}
                                helperText={addItemValues.helperTexts.helperTextItem}
                            />
                            <TextField
                                error={addItemValues.errors.isErrorWeight}
                                required
                                id="outlined-required"
                                label="Weight"
                                defaultValue=""
                                onChange={handleTextChange}
                                helperText={addItemValues.helperTexts.helperTextWeight}
                                size="small"
                                name="Weight"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">
                                        Kg
                                    </InputAdornment>,
                                }}
                            />
                            <TextField
                                error={addItemValues.errors.isErrorQty}
                                required
                                id="outlined-required"
                                label="Quantity"
                                defaultValue=""
                                size="small"
                                type="number"
                                name="Qty"
                                onChange={handleTextChange}
                                helperText={addItemValues.helperTexts.helperTextQty}
                            />
                        </div>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '97%', marginRight: "-30px" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            error={addItemValues.errors.isErrorDimensions}
                            placeholder="Dimmensions"
                            multiline
                            rows={2}
                            maxRows={5}
                            name="Dimensions"
                            onChange={handleTextChange}
                            helperText={addItemValues.helperTexts.helperTextDimensions}
                        />
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddItem}>Cancel</Button>
                    <Button onClick={handleSuccessAddItem}>Add Item</Button>
                </DialogActions>
            </Dialog>


            <Dialog
                open={openConfirmDialog}
                onClose={handleConfirmClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By confirming you can proceed with the new delivery request.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose}>Cancel</Button>
                    <Button onClick={completeMakeRequest} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openMapDialog}
                onClose={handleMapClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="md"
            >
                <MapComponent
                    pickUp={mainValues.PickUp}
                    pLat={mainValues.PLat}
                    pLng={mainValues.PLng}
                    dropOff={mainValues.DropOff}
                    dLat={mainValues.DLat}
                    dLng={mainValues.DLng}
                    handleMapClose={handleMapClose}
                    handleMapSelect={handleMapSelect}
                />
            </Dialog>
        </div>

    );
}

export default MakeRequest;
