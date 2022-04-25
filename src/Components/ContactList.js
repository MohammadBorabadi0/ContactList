import React from "react";
import { useFilter } from "../Providers/context/filter_context";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { filtered_contacts, all_contacts } = useFilter();

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-12 p-2">
        <div className="col-span-6">نام</div>
        <div className="col-span-6">شماره موبایل</div>
      </div>
      <hr />
      <div className="mt-2">
        {filtered_contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </main>
  );
};

export default ContactList;
