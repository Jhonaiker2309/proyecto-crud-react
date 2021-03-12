import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

// Moda acutalizar, Handle Change, editar, cerrar modal actualizar, modal insertar, data, insertar, cerrar modal insertar,
export default function ModalWindow({
  modalActualizar,
  modalInsertar,
  form,
  handleChange,
  dataOfApi,
  cerrarModalInsertar,
  insertar,
  cerrarModalActualizar,
  editar
}) {
  return (
    <div>
      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={form.id}
            />
          </FormGroup>
          <FormGroup>
            <label>Name:</label>

            <input
              className="form-control"
              name="first_name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.first_name}
            />
          </FormGroup>
          <FormGroup>
            <label>Last name:</label>
            <input
              className="form-control"
              name="last_name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.last_name}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.email}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => cerrarModalActualizar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={dataOfApi.length + 2 }
            />
          </FormGroup>

          <FormGroup>
            <label>Name:</label>

            <input
              className="form-control"
              name="first_name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.first_name}
            />
          </FormGroup>

          <FormGroup>
          <label>Last name:</label>
            <input
              className="form-control"
              name="last_name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.last_name}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={(e) => handleChange(e)}
              value={form.email}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => insertar()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
