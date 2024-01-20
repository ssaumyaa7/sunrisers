import React, { useState, useEffect } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";

const Popup = ({ element, openModal, onCloseModal, onUpdateElement }) => {
  const [value, setValue] = useState(element.expression);

  useEffect(() => {
    setValue(element.expression);
  }, [element.expression]);

  const handleClose = () => {
    onCloseModal();
  };

  const handleSave = () => {
    // Update the element with the new expression
    onUpdateElement({ ...element, expression: value });
    onCloseModal();
  };

  return (
    <Modal show={openModal} onClose={handleClose}>
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
        <Button color="gray" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
