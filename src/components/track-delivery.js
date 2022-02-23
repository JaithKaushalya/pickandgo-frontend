import React, { Component } from "react";
import { Typography } from "@mui/material"
import Header from "./header";

class TrackDelivery extends Component {

    render() {
        return (
            <div>
                <Header />
                <br />
                <Typography variant="h4" gutterBottom component="div">
                    TrackDelivery
                </Typography>
            </div>
        )
    }

}

export default TrackDelivery;