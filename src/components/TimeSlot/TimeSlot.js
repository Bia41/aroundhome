import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const TimeSlot = ({date, onClick, selectedTimeSlot}) => {
    const [isSelected, setIsSelected] = useState(false);

    const checkSlotUnavailable = (slot, selectedSlot) => {
        if(!selectedSlot) {
            return false;
        }
        const {start_time: startSlot, end_time: endSlot} = slot;
        const {start_time: startSelectedSlot, end_time: endSelectedSlot} = selectedSlot;

        return (startSlot > startSelectedSlot && startSlot < endSelectedSlot) ||
            (endSlot < endSelectedSlot && endSlot > startSelectedSlot);
    };

    //TODO: Há alguma maneira de fazer isto sem renderizar tudo novamente?
    useEffect(() => {
        setIsSelected(selectedTimeSlot === date)
    }, [onClick])

    return (
        <Button
            variant={isSelected ? "success" : "primary"}
            disabled={checkSlotUnavailable(date, selectedTimeSlot)}
            onClick={() => {onClick(); setIsSelected(true)}}>
            {new Date(date.start_time).toLocaleTimeString()}-{new Date(date.end_time).toLocaleTimeString()}
        </Button>
    );
};

export default React.memo(TimeSlot);
