import Company from "../../components/Company/Company";
import Reservation from "../../components/Reservation/Reservation";
import {useState} from "react";
import TimeSlotList from "../TimeSlotList/TimeSlotList";

const CompanyReservation = ({schedules}) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();

    return (
        <>
            <Company name={schedules.name} />
            {selectedTimeSlot && <Reservation timeSlot={selectedTimeSlot} />}
            <TimeSlotList
                timeSlots={schedules.time_slots}
                selectedTimeSlot={selectedTimeSlot}
                setSelectedTimeSlot={setSelectedTimeSlot} />
        </>
    )
}

export default CompanyReservation;