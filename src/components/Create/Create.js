import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { getAllPersons } from "../../redux/actions";
import { db } from "../../firebaseConfig/firebase";
import "./Create.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Create = ({ state, handleAbrirModal }) => {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [razon_social, setRazon_social] = useState("");
  const [nit, setNit] = useState("");
  const [telefono, setTelefono] = useState("");
  const [codigo, setCodigo] = useState("");

  const personaCollection = collection(db, "persona");
  const [labelError, setLabelError] = useState("");
  const store = async (e) => {
    e.preventDefault();
    if (nombre.length > 0) {
      if (razon_social.length > 0) {
        if (nit.length > 0) {
          if (telefono.length > 0) {
            if (codigo.length > 0) {
              await addDoc(personaCollection, {
                nombre,
                razon_social,
                nit,
                telefono,
                codigo,
              });
              dispatch(getAllPersons());
              MySwal.fire({
                // position: "center",
                icon: "success",
                title: "Datos Guardados Correctamente",
                showConfirmButton: false,
                timer: 3000,
              });
              handleAbrirModal();
            } else {
              setLabelError("Debe introduzir Datos en el campo Codigo");
            }
          } else {
            setLabelError("Debe introduzir Datos en el campo Telefono");
          }
        } else {
          setLabelError("Debe introduzir Datos en el campo Nit");
        }
      } else {
        setLabelError("Debe introduzir Datos en el campo Razon Social");
      }
    } else {
      setLabelError("Debe introduzir Datos en el campo Nombre");
    }
  };
  return (
    <>
      <Modal isOpen={state}>
        <form onSubmit={store}>
          <ModalHeader>Formulario</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Razon Social</Label>
              <Input
                value={razon_social}
                onChange={(e) => setRazon_social(e.target.value)}
                type="text"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Nit</Label>
              <Input
                value={nit}
                onChange={(e) => setNit(e.target.value)}
                type="text"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Telefono</Label>
              <Input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="text"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Codigo</Label>
              <Input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                type="text"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="label_error">{labelError}</Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Guardar
            </Button>
            <Button color="secondary" onClick={handleAbrirModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};
