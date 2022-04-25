import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_CONTACTS } from "../../actions";

// Reducer
import filter_reducer from "../reducers/filter_reducer";
// Context 
import { useContact } from "./contact_context";

// initialState
const initialState = {
  filtered_contacts: [],
  all_contacts: [],
  sort: "",
  filters: {
    text: "",
  },
};

// Create Context
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { contacts } = useContact();

  useEffect(() => {
    dispatch({ type: LOAD_CONTACTS, payload: contacts });
  }, [contacts]);

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

// custom Hooks
export const useFilter = () => useContext(FilterContext);
