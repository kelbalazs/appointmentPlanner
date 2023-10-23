import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contacts, setContacts] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);



  const handleSubmit = (e, newContact) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const isDuplicateContact = contacts.some(contact => contact.name === newContact.name);
    
    if (isDuplicateContact) {
      setIsDuplicate(true);
    } else {
      // Add contact info and clear data
      setContacts([...contacts, newContact]);
      setIsDuplicate(false);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          contacts={contacts}
          setContacts={setContacts}
          isDuplicate={isDuplicate}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />

      </section>
    </div>
  );
};
