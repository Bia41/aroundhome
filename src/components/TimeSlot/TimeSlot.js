import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const TimeSlot = ({date, setSelectedTimeSlot, selectedTimeSlot}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(selectedTimeSlot === date)
    }, [selectedTimeSlot, date])

    const checkSlotUnavailable = (slot, selectedSlot) => {
        if(!selectedSlot) {
            return false;
        }
        const {start_time: startSlot, end_time: endSlot} = slot;
        const {start_time: startSelectedSlot, end_time: endSelectedSlot} = selectedSlot;

        return (startSlot > startSelectedSlot && startSlot < endSelectedSlot) ||
            (endSlot < endSelectedSlot && endSlot > startSelectedSlot);
    };

    const selectTimeSlot = () => {
        setSelectedTimeSlot(isSelected ? null : date)
        setIsSelected(!isSelected);
    }

    return (
        <Button
            variant={isSelected ? "success" : "primary"}
            disabled={checkSlotUnavailable(date, selectedTimeSlot)}
            onClick={() => selectTimeSlot()}>
            {new Date(date.start_time).toLocaleTimeString()}-{new Date(date.end_time).toLocaleTimeString()}
        </Button>
    );
};

export default React.memo(TimeSlot);
