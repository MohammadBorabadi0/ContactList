import React, { createContext, useContext, useEffect, useReducer } from "react";
import { GET_CONTACTS } from "../../actions";

// Reducer
import contact_reducer from "../reducers/contact_reducer";

// initialState
const initialState = {
  contacts: [],
};

// Create Context
const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contact_reducer, initialState);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("contacts"));
    if (savedTodos) {
      dispatch({ type: GET_CONTACTS, payload: savedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

// Custom Hooks
export const useContact = () => useContext(ContactContext);
