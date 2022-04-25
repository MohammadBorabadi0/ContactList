import React from "react";
import { FILTER_CONTACTS, LOAD_CONTACTS, UPDATE_FILTERS } from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_CONTACTS: {
      return {
        ...state,
        filtered_contacts: [...action.payload],
        all_contacts: [...action.payload],
      };
    }

    case UPDATE_FILTERS: {
      return { ...state, filters: { ...state.filters, text: action.payload } };
    }

    case FILTER_CONTACTS: {
      const { all_contacts, filters } = state;
      const { text } = filters;
      let tempContacts = [...all_contacts];

      if (text) {
        tempContacts = tempContacts.filter((i) =>
          i.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      return { ...state, filtered_contacts: tempContacts };
    }

    default: {
      return state;
    }
  }
};

export default filter_reducer;
