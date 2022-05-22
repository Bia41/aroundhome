import {useEffect, useState} from "react";
import axios from "axios";

import CompanyReservation from "../CompanyReservation/CompanyReservation";

const ScheduleOverview = () => {
    const [companySchedules, setCompanySchedules] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/results')
            .then(result => {
                setCompanySchedules(result.data)
            })
    }, [])

    return companySchedules.map(schedules => (
        <CompanyReservation key={schedules.id} schedules={schedules} />
    ))
}

export default ScheduleOverview;