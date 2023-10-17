import React, { useState } from 'react';
import './AppointmentFormIC.css';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState(new Date());
    const[bookingTime, setBookingTime]= useState('')
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber,dateOfAppointment, bookingTime });
      setName('');
      setPhoneNumber('');
      setDateOfAppointment('');
      setBookingTime('')
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
</div>
<div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={dateOfAppointment}
            onChange={(e) => setDateOfAppointment(e.target.value)}
            required
          />
</div>
<div className="form-group" >
          <label htmlFor="date">Book Time Slot:</label>
          <input
            type="time"
            id="time"
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
            required
          />
</div>


        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
