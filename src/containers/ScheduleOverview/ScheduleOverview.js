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
        <div className={"col bg-light border rounded mx-1 mt-5"} key={schedules.id}>
            <CompanyReservation schedules={schedules} />
        </div>

    ))
}

export default ScheduleOverview;