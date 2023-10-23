import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ currentAppointments, currentContacts, addAppointment }) => {
  // Local state variables
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new appointment object
    const newAppointment = {
      name,
      contact,
      date,
      time,
    };
    // Add the new appointment using the callback function
    addAppointment(newAppointment);
    // Clear the form
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          currentContacts={currentContacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={currentAppointments} />
      </section>
    </div>
  );
};
