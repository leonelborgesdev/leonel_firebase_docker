import {
  CHANGE_ATTRIB,
  GET_ALL_PERSONS,
  GET_PERSON_BY_ATRIB,
} from "../actions/types";

const initialState = {
  personas: [],
  personas_table: [],
  attribFilter: "nombre",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PERSONS:
      return {
        ...state,
        personas: action.payload,
        personas_table: action.payload,
      };
    case GET_PERSON_BY_ATRIB:
      return {
        ...state,
        personas: action.payload,
      };
    case CHANGE_ATTRIB:
      return {
        ...state,
        attribFilter: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
