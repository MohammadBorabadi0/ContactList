import React, { useEffect, useRef, useState } from "react";

// Icons
import { GrLinkPrevious } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";
import { useContact } from "../Providers/context/contact_context";
import { ADD_CONTACT } from "../actions";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const { dispatch } = useContact();
  const history = useHistory();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" && mobile.trim() === "") {
      alert("لطفا نام و شماره موبایل خود را وارد کنید !");
      return;
    }
    dispatch({ type: ADD_CONTACT, name: name, mobile: mobile });
    history.push("/");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6">
      <div className="text-lg mb-8">
        <h2>افزودن مخاطب</h2>
      </div>
      <div className="pb-8">
        <GrLinkPrevious className="text-xl" />
        <img
          src={
            name
              ? `https://ui-avatars.com/api/?name=${name}&length=1&background=random&size=262`
              : "./img/icon.png"
          }
          alt="avatar"
          className="rounded-full mr-5 w-40"
        />
      </div>
      <hr />
      <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <label htmlFor="name">
            <FiUser />
          </label>
          <input
            type="text"
            placeholder="نام"
            ref={inputRef}
            className="border-b w-1/2 focus:outline-none py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="mobile">
            <HiPhone />
          </label>
          <input
            type="number"
            placeholder="شماره موبایل"
            className="border-b w-1/2 focus:outline-none py-1"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-1 text-lg bg-gray-600 text-white rounded-md"
          >
            افزودن
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddContact;
