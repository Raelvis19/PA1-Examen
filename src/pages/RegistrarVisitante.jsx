import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";


function RegistrarVisitante() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo_visita, setMotivo_visita] = useState("");
  const [fecha_visita, setFecha_visita] = useState("");



  const guardarPersona = async (e) => {
  e.preventDefault();

  const { error } = await supabase
    .from("visitantes")
    .insert([
      {
        nombre,
        cedula,
        telefono,
        correo,
        motivo_visita,
        fecha_visita,
        
      },
    ]);

  if (error) {
    alert("Error al guardar: " + error.message);
    return;
  }

  alert("Persona guardada correctamente");

  setNombre("");
  setCedula("");
  setTelefono("");
  setCorreo("");
  setMotivo_visita("");
  setFecha_visita("");
  };

  return (
    <>
      <h2>Registrar Visitantes</h2>

      <form onSubmit={guardarPersona}>
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
            Cedula
          </label>

          <input
            type="text"
            className="form-control"
            value={cedula}
            onChange={(e) =>
              setCedula(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Telefono
          </label>

          <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) =>
              setTelefono(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Correo
          </label>

          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) =>
              setCorreo(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Motivo_visita
          </label>

          <input
            type="text"
            className="form-control"
            value={motivo_visita}
            onChange={(e) =>
              setMotivo_visita(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Fecha_visita
          </label>

          <input
            type="date"
            className="form-control"
            value={fecha_visita}
            onChange={(e) =>
              setFecha_visita(e.target.value)
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

export default RegistrarVisitante; 