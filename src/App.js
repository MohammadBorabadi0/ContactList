import React from "react";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

// Components
import ContactList from "./Components/ContactList";
import Navbar from "./Components/Navbar";
import AddContact from "./Components/AddContact";

// Context
import FilterProvider from "./Providers/context/filter_context";
import ContactProvider from "./Providers/context/contact_context";


function App() {
  return (
    <ContactProvider>
      <FilterProvider>
        <Navbar />
        <Switch>
          <Route path="/add" component={AddContact} />
          <Route exact path="/" component={ContactList} />
        </Switch>
      </FilterProvider>
    </ContactProvider>
  );
}

export default App;
