import { useState } from "react";

function NuevaPersona() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const guardar = (e) => {
    e.preventDefault();

    alert(
      `Nombre: ${nombre}\nEdad: ${edad}`
    );

    setNombre("");
    setEdad("");
  };

  return (
    <>
      <h2>Nueva Persona</h2>

      <form onSubmit={guardar}>
        <div className="mb-3">
          <label className="form-label">
            Nombre
          </label>

          <input
            className="form-control"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Edad
          </label>

          <input
            type="number"
            className="form-control"
            value={edad}
            onChange={(e) =>
              setEdad(e.target.value)
            }
          />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </>
  );
}

export default NuevaPersona;