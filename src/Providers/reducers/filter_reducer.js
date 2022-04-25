import React from "react";
import { LOAD_CONTACTS } from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_CONTACTS: {
      return {
        ...state,
        filtered_contacts: [...action.payload],
        all_contacts: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default filter_reducer;
