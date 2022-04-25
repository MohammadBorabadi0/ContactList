import React from "react";

// Components
import ContactList from "./Components/ContactList";
import Navbar from "./Components/Navbar";

// Context
import FilterProvider from "./Providers/context/filter_context";
import ContactProvider from "./Providers/context/contact_context";

function App() {
  return (
    <ContactProvider>
      <FilterProvider>
        <Navbar />
        <ContactList />
      </FilterProvider>
    </ContactProvider>
  );
}

export default App;
