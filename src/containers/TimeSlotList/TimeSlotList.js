import React from "react";
import TimeSlot from "../../components/TimeSlot/TimeSlot";


const TimeSlotList = ({ timeSlots, selectedTimeSlot, setSelectedTimeSlot }) => {

    const groupTimeSlotsByDate = () => {
        const groupedSlots = timeSlots.reduce((previousValue, currentValue)=>{
            const day = currentValue.start_time.slice(0,10);
            previousValue[day] = previousValue[day] || {date: currentValue, slots: []};
            previousValue[day].slots.push(currentValue);
            return previousValue;
        },{});

        return Object.values(groupedSlots);
    }

    const getWeekDay = (date) => new Date(date).toString().toUpperCase().slice(0,3);

    return groupTimeSlotsByDate().map((timeSlot, timeSlotIndex) => {
        return (
            <>
                <label key={timeSlotIndex}>{getWeekDay(timeSlot.date.start_time)}</label>
                {timeSlot.slots.map((slot, slotIndex) =>
                    <TimeSlot
                        key={slotIndex}
                        date={slot}
                        selectedTimeSlot={selectedTimeSlot}
                        setSelectedTimeSlot={setSelectedTimeSlot}/>
                )}
            </>
        )
    });
};
export default TimeSlotList;
