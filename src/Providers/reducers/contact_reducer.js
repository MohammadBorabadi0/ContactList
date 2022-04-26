import React from "react";
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACTS,
  REMOVE_CONTACT,
} from "../../actions";

const contact_reducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS: {
      return { ...state, contacts: [...action.payload] };
    }

    case ADD_CONTACT: {
      const updatedContacts = [...state.contacts];
      updatedContacts.push({
        id: new Date().getTime(),
        name: action.name,
        mobile: action.mobile,
      });
      return { ...state, contacts: updatedContacts };
    }

    case REMOVE_CONTACT: {
      const updatedContacts = [...state.contacts];
      const filteredContacts = updatedContacts.filter(
        (i) => i.id !== action.payload
      );
      return { ...state, contacts: filteredContacts };
    }

    case EDIT_CONTACT: {
      const updatedContacts = [...state.contacts];
      const index = updatedContacts.findIndex((i) => i.id === action.id);
      const udpatedItem = updatedContacts[index];
      udpatedItem.name = action.name;
      udpatedItem.mobile = action.mobile;
      return { ...state, contacts: updatedContacts };
    }

    default: {
      return state;
    }
  }
};

export default contact_reducer;
