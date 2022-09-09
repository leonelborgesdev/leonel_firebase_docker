import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import { Create } from "./Create";
import { getAllPersons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { DropdownButton } from "./DropdownButton/DropdownButton.js";

export const Show = () => {
  const { personas } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPersons());
  }, []);
  const [state, setState] = useState(false);
  const handleAbrirModal = () => {
    setState(state === true ? false : true);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <button
                className="btn btn-secondary mt-2 mb-2"
                onClick={handleAbrirModal}
              >
                Create
              </button>
            </div>
            <div className="container_search">
              <input type={"text"} />
              <DropdownButton />
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Razon Social</th>
                  <th>Nit</th>
                  <th>Telefono</th>
                  <th>Codigo</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((persona) => (
                  <tr key={persona.id}>
                    <td>{persona.nombre}</td>
                    <td>{persona.razon_social}</td>
                    <td>{persona.nit}</td>
                    <td>{persona.telefono}</td>
                    <td>{persona.codigo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Create state={state} handleAbrirModal={handleAbrirModal} />
    </>
  );
};
