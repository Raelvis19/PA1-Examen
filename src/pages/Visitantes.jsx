import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

function Visitantes() {
  const [visitantes, setVisitantes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  
  const cargarVisitantes = async () => {
    const { data, error } = await supabase
      .from("visitantes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert("Error al cargar los visitantes: " + error.message);
      return;
    }

    setVisitantes(data);
  };

  
  const eliminarVisitante = async (id) => {
    const confirmar = window.confirm(
      "Deseas eliminar este visitante"
    );

    if (!confirmar) return;

    const { error } = await supabase
      .from("visitantes")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Error al eliminar: " + error.message);
      return;
    }

    alert("Visitante eliminado correctamente");

    
    setVisitantes((prevVisitantes) =>
      prevVisitantes.filter(
        (visitante) => visitante.id !== id
      )
    );
  };

  useEffect(() => {
    cargarVisitantes();
  }, []);


  const visitantesFiltrados = visitantes.filter((visitante) =>
    visitante.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase()) ||
    visitante.cedula
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Listado de Visitantes</h3>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre o cedula"
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
            />
          </div>

          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Cédula</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Motivo</th>
                <th>Fecha de Visita</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {visitantesFiltrados.length > 0 ? (
                visitantesFiltrados.map((visitante) => (
                  <tr key={visitante.id}>
                    <td>{visitante.nombre}</td>
                    <td>{visitante.cedula}</td>
                    <td>{visitante.telefono}</td>
                    <td>{visitante.correo}</td>
                    <td>{visitante.motivo_visita}</td>
                    <td>{visitante.fecha_visita}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          eliminarVisitante(visitante.id)
                        }
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center"
                  >
                    No se encontraron visitantes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Visitantes;