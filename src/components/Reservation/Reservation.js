import React from "react";
import {Card} from "react-bootstrap";


const Reservation = ({timeSlot}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Reservation</Card.Title>
                <Card.Text>{new Date(timeSlot.start_time).toLocaleTimeString()}-{new Date(timeSlot.end_time).toLocaleTimeString()}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Reservation;
