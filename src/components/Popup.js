import { useState } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";

import React from "react";

const Popup = ({
  index,
  metric,
  expression,
  openModal,
  setOpenModal,
  setExpression,
}) => {
  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{metric}</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="expression" value="Expression" />
            </div>
            <TextInput
              id="expression"
              placeholder="expression"
              value={expression}
              onChange={(event) => setExpression(event.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="gray" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
