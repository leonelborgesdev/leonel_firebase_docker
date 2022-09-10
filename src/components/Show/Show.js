import React, { useState, useEffect } from "react";

import { Create } from "../Create/Create";
import {
  changePagina,
  getAllPersons,
  getPersonByAttrib,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { DropdownButton } from "../DropdownButton/DropdownButton.js";
import "./Show.css";

export const Show = () => {
  const { personas, personas_table, attribFilter, objetos } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPersons());
  }, []);
  const [state, setState] = useState(false);
  const handleAbrirModal = () => {
    setState(state === true ? false : true);
  };
  const handlefilter = (e) => {
    const { value } = e.target;
    dispatch(getPersonByAttrib(personas_table, attribFilter, value));
  };
  const handlePaginado = () => {
    dispatch(changePagina(objetos));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container_search">
              <DropdownButton />
              <input type={"text"} onChange={handlefilter} />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-secondary mt-2 mb-2"
                  onClick={handleAbrirModal}
                >
                  Create
                </button>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr className="table-primary">
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Razon Social</th>
                  <th>Nit</th>
                  <th>Telefono</th>
                  <th>Codigo</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((persona, index) => (
                  <React.Fragment key={index}>
                    {index < objetos && (
                      <tr key={persona.id}>
                        <td>{index + 1}</td>
                        <td>{persona.nombre}</td>
                        <td>{persona.razon_social}</td>
                        <td>{persona.nit}</td>
                        <td>{persona.telefono}</td>
                        <td>{persona.codigo}</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            {personas.length > objetos && (
              <div className="button_bajar">
                <button onClick={handlePaginado}>v</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Create state={state} handleAbrirModal={handleAbrirModal} />
    </>
  );
};
