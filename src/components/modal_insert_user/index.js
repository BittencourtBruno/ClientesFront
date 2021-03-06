import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

import api from "../../service/api";

export default function ModalUserComponent(props) {
  const [show, setShow] = useState(false);
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [cpf, setCpf] = useState("");
  let [bairro, setBairro] = useState("");
  let [logradouro, setLogradouro] = useState("");
  let [cidade, setCidade] = useState("");
  let [UF, setUf] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    event.preventDefault();
    let data = {
      username,
      password,
      email,
      cpf,
      bairro,
      logradouro,
      cidade,
      uf
    };
    await api.post("/users", data);
    await handleClose();
    props.refreshUsers();
  }

  return (
    <>
      <Button style={{ margin: "20px" }} variant="primary" onClick={handleShow}>
        Novo Registro
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        id="modalstyle"
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nome do Usuario</Form.Label>
                <Form.Control
                  value={username}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />

                <Form.Label>Senha</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  value={cpf}
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                <Form.Label>Logradouro</Form.Label>
                <Form.Control
                  value={logradouro}
                  onChange={(event) => {
                    setLogradouro(event.target.value);
                  }}
                />
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  value={bairro}
                  onChange={(event) => {
                    setBairro(event.target.value);
                  }}
                />
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  value={cidade}
                  onChange={(event) => {
                    setCidade(event.target.value);
                  }}
                />
                <Form.Label>UF</Form.Label>
                <Form.Control
                  value={uf}
                  onChange={(event) => {
                    setUf(event.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
