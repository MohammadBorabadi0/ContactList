import React from "react";
import { toFarsiNumber } from "../helper/functions";
import { useFilter } from "../Providers/context/filter_context";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { filtered_contacts, all_contacts } = useFilter();

  if (!all_contacts.length) {
    return (
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6">
        <h3>هیچ مخاطبی وجود ندارد.</h3>
      </div>
    );
  }

  if (!filtered_contacts.length) {
    return (
      <main className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-12 p-2">
          <div className="col-span-6">نام</div>
          <div className="hidden sm:flex col-span-6">شماره موبایل</div>
        </div>
        <hr />
        <div className="mt-4 p-2">
          <h1 className="p-1 text-gray-500 mb-4">
            مخاطبین ({toFarsiNumber(all_contacts.length)})
          </h1>
          <h3>هیچ مخاطبی پیدا نشد.</h3>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-2 sm:px-6 py-2">
      <div className="grid grid-cols-12 p-1 sm:p-2">
        <div className="col-span-6">نام</div>
        <div className="hidden sm:flex col-span-6">شماره موبایل</div>
      </div>
      <hr />
      <div className="mt-2">
        <h1 className="p-1 text-gray-500">
          مخاطبین ({toFarsiNumber(all_contacts.length)})
        </h1>
        {filtered_contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </main>
  );
};

export default ContactList;
