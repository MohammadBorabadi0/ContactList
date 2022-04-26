import React from "react";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

// Components
import ContactList from "./Components/ContactList";
import Navbar from "./Components/Navbar";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";
import DetailContact from "./Components/DetailContact";

// Context
import FilterProvider from "./Providers/context/filter_context";
import ContactProvider from "./Providers/context/contact_context";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <ContactProvider>
      <FilterProvider>
        <Navbar />
        <Switch>
          <Route path="/contact/:id" component={DetailContact} />
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/add" component={AddContact} />
          <Route exact path="/" component={ContactList} />
          <Redirect to="/" />
        </Switch>
      </FilterProvider>
    </ContactProvider>
  );
}

export default App;
