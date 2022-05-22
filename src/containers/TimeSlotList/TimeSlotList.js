import React from "react";
import TimeSlot from "../../components/TimeSlot/TimeSlot";


const TimeSlotList = ({ timeSlots, selectedTimeSlot, setSelectedTimeSlot }) => {

    // const groupedTimeSlots = () => {
    //
    //     timeSlots.map(timeSlot)
    // }

    return timeSlots.map((timeSlot, index) => {
        return (
            <TimeSlot
                key={index}
                date={timeSlot}
                selectedTimeSlot={selectedTimeSlot}
                onClick={() => setSelectedTimeSlot(timeSlot)}/>
        );
    });
};
export default TimeSlotList;
