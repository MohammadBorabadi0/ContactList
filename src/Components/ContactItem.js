import React from "react";

// Icons
import { GrEdit } from "react-icons/gr";
import { BsTrashFill } from "react-icons/bs";
import { toFarsiNumber } from "../helper/functions";

const ContactItem = ({ contact }) => {
  return (
    <section className="grid grid-cols-12 px-2 py-4 hover:bg-gray-200 rounded-md cursor-pointer">
      <div className="col-span-6 flex items-center">
        <img
          src={`https://ui-avatars.com/api/?name=${contact.name}&length=1&background=random&size=40`}
          alt="avatar"
          className="rounded-full ml-4"
        />
        <h4>{contact.name}</h4>
      </div>
      <div className="hidden sm:flex col-span-6 items-center justify-between">
        <p>{toFarsiNumber(contact.mobile)}</p>
        <div className="flex items-center pl-4 gap-8">
          <button>
            <GrEdit className="text-gray-800" />
          </button>
          <button>
            <BsTrashFill className="text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactItem;
