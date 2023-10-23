import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
        />
        <p>Format: (123) 456-7890</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};
