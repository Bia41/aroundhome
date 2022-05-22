import React from "react";

const Reservation = ({timeSlot}) => {
    return (
        <div className={"border mb-3 bg-white p-3 text-center"}>
            <div>
                <div className={"fw-bold"}>Reservation</div>
                <div>{new Date(timeSlot.start_time).toLocaleTimeString()}-{new Date(timeSlot.end_time).toLocaleTimeString()}</div>
            </div>
        </div>
    );
};

export default Reservation;
