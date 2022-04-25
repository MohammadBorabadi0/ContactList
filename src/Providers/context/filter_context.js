import React, { createContext, useContext, useEffect, useReducer } from "react";
import { FILTER_CONTACTS, LOAD_CONTACTS, UPDATE_FILTERS } from "../../actions";

// Reducer
import filter_reducer from "../reducers/filter_reducer";
// Context
import { useContact } from "./contact_context";

// initialState
const initialState = {
  filtered_contacts: [],
  all_contacts: [],
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

  useEffect(() => {
    dispatch({ type: FILTER_CONTACTS });
  }, [contacts, state.filters]);

  const updateFilters = (e) => {
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: value });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

// custom Hooks
export const useFilter = () => useContext(FilterContext);
