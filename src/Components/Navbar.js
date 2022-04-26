import React from "react";

// Icons
import { IoMdContact } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

// Context
import { useFilter } from "../Providers/context/filter_context";

const Navbar = () => {
  const { updateFilters, filters } = useFilter();
  const { text } = filters;

  return (
    <nav className="bg-gray-100 mb-4">
      <section className="max-w-screen-xl mx-auto px-1 sm:px-4 py-3 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
        <Link to="/">
          <div className="flex gap-1 items-center">
            <IoMdContact className="text-3xl md:text-4xl text-blue-600" />
            <h1 className="md:text-xl text-slate-700">مخاطبین</h1>
          </div>
        </Link>
        <div className="flex items-center bg-gray-200 rounded-full sm:p-1 p-2">
          <GrSearch className="text-lg" />
          <input
            type="text"
            className="bg-transparent px-2 focus:outline-none"
            placeholder="جستجوی مخاطب"
            name="text"
            value={text}
            onChange={updateFilters}
          />
        </div>
        <div className="hidden sm:flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-full shadow-md">
          <AiOutlinePlus />
          <Link to="/add">ایجاد مخاطب</Link>
        </div>
        <div className="flex items-center justify-center bg-gray-200 fixed bottom-3 left-1 sm:hidden border-2 rounded-full px-4 py-2 text-2xl shadow-md z-10">
          <Link to="/add">+</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
