import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import ToggleButton from "./componenteB";

const ContactoComponent = ({ contacto }) => {
  const [currentStatus = contacto.status, setStatus] = useState(
    contacto.status
  );

  return (
    <div>
      <h2>Nombre: {contacto.name}</h2>
      <h3>Apellido: {contacto.last_name}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>
        Estado:
        {currentStatus ? "Contacto En Linea" : "Contacto No Disponible"}
      </h5>

      <ToggleButton contacto={contacto} setStatus={setStatus}></ToggleButton>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
