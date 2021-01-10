import React from 'react'
import "./planning.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const Planning = () => {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={[
            { title: "Add Rdv", date: "2019-11-06", start: new Date() },
            { title: "Add Rdv", date: "2019-11-06", start: new Date() },
            { title: "Add Rdv", date: "2019-11-06", start: new Date() },
            { title: "Add Rdv", date: "2019-11-06", start: new Date() },
            { title: "Add Rdv", date: "2019-11-10" },
            { title: "Add Rdv", date: "2019-11-10" },
            { title: "Add Rdv", date: "2019-11-10" },
            { title: "Add Rdv", date: "2019-11-15" },
            { title: "Add Rdv", date: "2019-11-15" },
            { title: "Add Rdv", date: "2019-11-15" },
            { title: "Add Rdv", date: "2019-11-19" },
            { title: "Add Rdv", date: "2019-11-19" },
            { title: "Add Rdv", date: "2019-11-19" },
          ]}
        />
      </div>
    );
}

export default Planning
