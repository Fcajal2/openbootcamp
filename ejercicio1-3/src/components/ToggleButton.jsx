import React from "react";

const ToggleButton = ({ contacto, setStatus }) => {
  function handleStatus() {
    setStatus(!contacto.status);
    contacto.status = !contacto.status;
  }
  return (
    <div>
      <button onClick={handleStatus}>Change status</button>
    </div>
  );
};

export default ToggleButton;
