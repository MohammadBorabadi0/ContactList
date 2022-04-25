import React from "react";
import { ADD_CONTACT } from "../../actions";

const contact_reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const updatedContacts = [...state.contacts];
      updatedContacts.push({
        id: new Date().getTime(),
        name: action.name,
        mobile: action.mobile,
      });
      return { ...state, contacts: updatedContacts };
    }
    default: {
      return state;
    }
  }
};

export default contact_reducer;
