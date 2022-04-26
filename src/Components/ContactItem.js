import React, { useCallback } from "react";

import { toFarsiNumber } from "../helper/functions";
import { useContact } from "../Providers/context/contact_context";
import { REMOVE_CONTACT } from "../actions";
import { Link, useHistory } from "react-router-dom";

// Icons
import { GrEdit } from "react-icons/gr";
import { BsTrashFill } from "react-icons/bs";

const ContactItem = ({ contact }) => {
  const { dispatch } = useContact();

  const history = useHistory();
  const onClick = useCallback(() => {
    const to = `/contact/${contact.id}`;
    history.push(to);
  }, [contact, history]);

  return (
    <section
      onClick={onClick}
      className="grid grid-cols-12 py-4 hover:bg-gray-200 rounded-md cursor-pointer"
    >
      <div className="col-span-6 flex items-center">
        <img
          src={`https://ui-avatars.com/api/?name=${contact.name}&length=1&background=random&size=40`}
          alt="avatar"
          className="rounded-full ml-2 sm:ml-4"
        />
        <h4 className="text-sm sm:text-base">{contact.name}</h4>
      </div>
      <div className="hidden sm:flex col-span-6 items-center justify-between">
        <p>{toFarsiNumber(contact.mobile)}</p>
        <div className="flex items-center pl-4 gap-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              history.push(`/edit/${contact.id}`);
            }}
          >
            <GrEdit className="text-gray-800 text-xl" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: REMOVE_CONTACT, payload: contact.id });
            }}
          >
            <BsTrashFill className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactItem;
