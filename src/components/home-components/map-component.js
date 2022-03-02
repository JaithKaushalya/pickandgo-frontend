
import React from "react";
import Box from '@mui/material/Box';
import { Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyBR4f3ehB68aR3IN3D6uCK6RHZbzCH0M40');


class MapComponent extends React.Component {

    MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={this.state.zoom}
            defaultCenter={{ lat: this.state.mapPoition.lat, lng: this.state.mapPoition.lng }}
        >
            <Marker
                key={"M001"}
                draggable={true}
                onDragEnd={this.onMarker1DragEnd}
                defaultPosition={{ lat: this.state.markerPostion1.lat, lng: this.state.markerPostion1.lng }}>
                <InfoWindow><div>Pick-Up</div></InfoWindow>
            </Marker>

            <Marker
                key={"M002"}
                draggable={true}
                onDragEnd={this.onMarker2DragEnd}
                defaultPosition={{ lat: this.state.markerPostion2.lat, lng: this.state.markerPostion2.lng }}>
                <InfoWindow><div>Drop-Off</div></InfoWindow>
            </Marker>
        </GoogleMap >
    ));
    constructor(props) {
        super(props);
        this.onMarker1DragEnd = this.onMarker1DragEnd.bind(this);
        this.onMarker2DragEnd = this.onMarker2DragEnd.bind(this);
        this.state = {
            zoom: 8,
            height: '',
            pickUp: this.props.pickUp,
            dropOff: this.props.dropOff,
            mapPoition: {
                lat: 7.291418,
                lng: 80.636696,
            },
            markerPostion1: {
                lat: this.props.pLat,
                lng: this.props.pLng,
            },
            markerPostion2: {
                lat: this.props.dLat,
                lng: this.props.dLng,
            }
        }
        console.log(props.pLat);
    }

    componentDidMount() {

    }

    reDrawMap() {
        this.MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={this.state.zoom}
                defaultCenter={{ lat: this.state.mapPoition.lat, lng: this.state.mapPoition.lng }}
            >
                <Marker
                    key={"M001"}
                    draggable={true}
                    onDragEnd={this.onMarker1DragEnd}
                    defaultPosition={{ lat: this.state.markerPostion1.lat, lng: this.state.markerPostion1.lng }}>
                    <InfoWindow><div>Pick-Up</div></InfoWindow>
                </Marker>

                <Marker
                    key={"M002"}
                    draggable={true}
                    onDragEnd={this.onMarker2DragEnd}
                    defaultPosition={{ lat: this.state.markerPostion2.lat, lng: this.state.markerPostion2.lng }}>
                    <InfoWindow><div>Drop-Off</div></InfoWindow>
                </Marker>
            </GoogleMap >
        ));
    }

    onMarker1DragEnd(event) {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();

        this.setState({
            markerPostion1: {
                lat: newLat,
                lng: newLng,
            }
        })
        this.reDrawMap();
        Geocode.fromLatLng(newLat, newLng).then(response => {
            this.setState({
                pickUp: response.results[0].formatted_address ? response.results[0].formatted_address : "",
            })
        });
    }

    onMarker2DragEnd(event) {
        let newLat2 = event.latLng.lat();
        let newLng2 = event.latLng.lng();

        this.setState({
            markerPostion2: {
                lat: newLat2,
                lng: newLng2,
            }
        });
        this.reDrawMap();
        Geocode.fromLatLng(newLat2, newLng2).then(response => {
            this.setState({
                dropOff: response.results[0].formatted_address ? response.results[0].formatted_address : "",
            })
        });
    }

    render() {

        return (
            <div>
                <DialogTitle id="alert-dialog-title">
                    {"Select your locations"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Select pick-up and drop-off locations to proceed with the request.
                    </DialogContentText>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { width: '100%' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                sx={{ marginTop: "20px" }}
                                required
                                id="outlined-required"
                                label="Pick-Up Location"
                                defaultValue=""
                                size="small"
                                name="Item"
                                value={this.state.pickUp}
                            />
                            <TextField
                                sx={{ marginTop: "20px" }}
                                required
                                id="outlined-required"
                                label="Drop-Off Location"
                                defaultValue=""
                                value={this.state.dropOff}
                                size="small"
                                name="Weight"
                            />

                        </div>
                    </Box>
                    <br /><br />
                    <this.MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBR4f3ehB68aR3IN3D6uCK6RHZbzCH0M40&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleMapClose}>Cancel</Button>
                    <Button onClick={(val)=>this.props.handleMapSelect(this.state)} autoFocus>Select</Button>
                </DialogActions>
            </div >
        );
    }
}

export default MapComponent;