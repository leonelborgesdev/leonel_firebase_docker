import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import {
  CHANGE_ATTRIB,
  CHANGE_PAGINA,
  GET_ALL_PERSONS,
  GET_PERSON_BY_ATRIB,
} from "./types";

export const getAllPersons = () => {
  return async function (dispatch) {
    const personasCollection = collection(db, "persona");
    const data = await getDocs(personasCollection);
    if (data) {
      dispatch({
        type: GET_ALL_PERSONS,
        payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      });
    }
  };
};
export const getPersonByAttrib = (personas, colum, value) => {
  return function (dispatch) {
    const filterPerson = personas.filter((persona) => persona[colum] === value);
    console.log(personas, colum, value, filterPerson);
    if (filterPerson.length > 0) {
      dispatch({
        type: GET_PERSON_BY_ATRIB,
        payload: filterPerson,
      });
    } else {
      dispatch({
        type: GET_PERSON_BY_ATRIB,
        payload: personas,
      });
    }
  };
};
export const changeFilterAttrib = (attrib) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_ATTRIB,
      payload: attrib,
    });
  };
};
export const changePagina = (pagina) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_PAGINA,
      payload: pagina + 20,
    });
  };
};
