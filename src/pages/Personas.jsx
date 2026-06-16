function Personas() {
    const personas = [
      {
        id: 1,
        nombre: "Anthony Barrera",
        edad: 30,
      },
      {
        id: 2,
        nombre: "Juan Pérez",
        edad: 25,
      },
    ];
  
    return (
      <>
        <h2>Listado de Personas</h2>
  
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
  
          <tbody>
            {personas.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export default Personas;