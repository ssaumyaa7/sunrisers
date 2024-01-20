import { useState } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";

import React from "react";

const Popup = ({ index, element, openModal, setOpenModal, setExpression }) => {
  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);
  const [value,setValue]=useState(element.expression)

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{element.metricName}</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="expression" value="Expression" />
            </div>
            <TextInput
              id="expression"
              placeholder="expression"
              value={value}
              onChange={(event) => setValue(event.target.value)}
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
