import React from "react";
import { useSelector } from "react-redux";
import "./DropdownButton.css";

export const DropdownButton = () => {
  const { dropdowname } = useSelector((state) => state);
  return (
    <div className="header_lista">
      <ul className="lista_select">
        <li>
          <h3>Nombre</h3>
          <ul>
            <li>
              <h3>Razon Social</h3>
            </li>
            <li>
              <h3>Nit</h3>
            </li>
            <li>
              <h3>Telefono</h3>
            </li>
            <li>
              <h3>Codogo</h3>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
