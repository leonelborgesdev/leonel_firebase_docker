import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { GET_ALL_PERSONS } from "./types";

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
