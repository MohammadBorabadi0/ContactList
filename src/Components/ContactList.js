import React from "react";
import { useFilter } from "../Providers/context/filter_context";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { filtered_contacts, all_contacts } = useFilter();

  if (!all_contacts.length) {
    return (
      <div className="max-w-screen-xl mx-auto px-6">
        <h3>هیچ مخاطبی وجود ندارد.</h3>
      </div>
    );
  }

  if (!filtered_contacts.length) {
    return (
      <main className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-12 p-2">
          <div className="col-span-6">نام</div>
          <div className="col-span-6">شماره موبایل</div>
        </div>
        <hr />
        <div className="mt-4 p-2">
          <h1>هیچ مخاطبی پیدا نشد.</h1>
        </div>
      </main>
    );
  }

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
