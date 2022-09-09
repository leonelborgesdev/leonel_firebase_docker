import { GET_ALL_PERSONS } from "../actions/types";

const initialState = {
  personas: [],
  dropdowname: "Nombre",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PERSONS:
      return {
        ...state,
        personas: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
