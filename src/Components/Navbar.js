import React from "react";

// Icons
import { IoMdContact } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 mb-4">
      <section className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
        <div className="flex gap-1 items-center">
          <IoMdContact className="text-3xl md:text-4xl text-blue-600" />
          <h1 className="md:text-xl">مخاطبین</h1>
        </div>
        <div className="flex items-center bg-gray-200 rounded-full p-2">
          <GrSearch className="text-lg" />
          <input
            type="text"
            className="bg-transparent px-2 focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="hidden sm:flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-full shadow-md">
          <AiOutlinePlus />
          <h4>ایجاد مخاطب</h4>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
