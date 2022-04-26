import React from "react";

import { Link, useHistory } from "react-router-dom";
import { REMOVE_CONTACT } from "../actions";

// Icons
import { GrLinkPrevious } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";

// Context
import { useContact } from "../Providers/context/contact_context";

const DetailContact = ({ match }) => {
  const { contacts, dispatch } = useContact();
  const id = Number(match.params.id);
  const Item = contacts.find((i) => i.id === id);
  const history = useHistory();

  const handleRemove = () => {
    dispatch({ type: REMOVE_CONTACT, payload: Item.id });
    history.push("/");
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6">
      <div className="text-lg mb-8">
        <h2>جزئیات مخاطب</h2>
      </div>
      <div className="pb-8 flex justify-between items-center">
        <div>
          <Link to="/">
            <GrLinkPrevious className="text-xl" />
          </Link>
          <img
            src={`https://ui-avatars.com/api/?name=${Item.name}&length=1&background=random&size=262`}
            alt="avatar"
            className="rounded-full mr-5 w-40"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={`/edit/${Item.id}`}
            className="px-4 py-1 bg-blue-700 text-white rounded-md"
          >
            Edit
          </Link>
          <button
            className="px-4 py-1 bg-red-700 text-white rounded-md"
            onClick={handleRemove}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4 border rounded-xl mt-8 p-4">
        <div className="flex items-center gap-4">
          <FiUser className="text-xl text-slate-700" />
          <h4>{Item.name}</h4>
        </div>
        <div className="flex items-center gap-4">
          <HiPhone className="text-xl text-slate-700" />
          <p className="text-blue-700">{Item.mobile}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailContact;
