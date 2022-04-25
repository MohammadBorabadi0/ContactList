import React, { createContext, useContext, useReducer } from "react";
import contact_reducer from "../reducers/contact_reducer";

// initialState
const initialState = {
  contacts: [
    { id: 1, name: "Mohammad", mobile: "09918883876" },
    { id: 2, name: "Reza", mobile: "09126663691" },
    { id: 3, name: "Ali", mobile: "09017464276" },
  ],
};

// Create Context
const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contact_reducer, initialState);
  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

// Custom Hooks
export const useContact = () => useContext(ContactContext);
