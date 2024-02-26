import React, { useState } from "react";

const Semaforo = () => {
 
  const [claseSeleccionada, setClaseSeleccionada] = useState("");

  
  const cambiarClase = (nuevaClase) => {
    
    setClaseSeleccionada(nuevaClase);
  };

  return (
    <div className="semaforo centro">
      <div className="arriba"></div>
      <div className="abajo">
        <div className="espacio">
          <button
            className={`circulo rojo ${claseSeleccionada === "rojo" ? "seleccionado" : ""}`}
            onClick={() => cambiarClase("rojo")}
          ></button>
        </div>
        <div className="espacio">
          <button
            className={`circulo amarillo ${claseSeleccionada === "amarillo" ? "seleccionado" : ""}`}
            onClick={() => cambiarClase("amarillo")}
          ></button>
        </div>
        <div className="espacio">
          <button
            className={`circulo verde ${claseSeleccionada === "verde" ? "seleccionado" : ""}`}
            onClick={() => cambiarClase("verde")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Semaforo;
