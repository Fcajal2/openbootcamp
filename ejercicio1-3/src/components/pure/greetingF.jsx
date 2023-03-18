import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  //Breve introduccion a useState
  // const [variable, metodo para actualizar] = useState(valor inicial)
  const [age, setage] = useState(props.age);

  const birthday = () => {
    //actualizamos el State
    setage(age + 1);
  };

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default GreetingF;
