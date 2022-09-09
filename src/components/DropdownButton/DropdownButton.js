import React from "react";
import { useSelector } from "react-redux";
import "./DropdownButton.css";

export const DropdownButton = () => {
  const { dropdowname } = useSelector((state) => state);
  return (
    <div>
      <ul className="lista_select">
        <li>{dropdowname}</li>
        <ul>
          <li>Razon Social</li>
          <li>Nit</li>
          <li>Telefono</li>
          <li>Codigo</li>
        </ul>
      </ul>
    </div>
  );
};
