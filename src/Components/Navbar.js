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
        <div className="sm:hidden flex items-center justify-center fixed bottom-8 left-5 ring-2 ring-blue-700 ring-offset-1 w-11 h-11 bg-blue-700 text-white rounded-full shadow-xl text-3xl pt-1">
          <Link to="/add">+</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
