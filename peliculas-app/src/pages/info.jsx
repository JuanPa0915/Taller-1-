function Info({ cerrar }) {

  return (
    <div className="infoOverlay">

      <div className="infoBox">

        <h2>Bienvenido al catálogo de películas</h2>

        <p>
          Esta aplicación permite explorar un catálogo de películas
          almacenadas en una base de datos. Los usuarios autenticados
          pueden agregar, editar y eliminar películas.
        </p>

        <h3>Sobre el cine</h3>

        <p>
          El cine es una forma de arte y entretenimiento que utiliza
          imágenes en movimiento para contar historias. Desde su
          invención a finales del siglo XIX, el cine se ha convertido
          en una de las industrias culturales más importantes del mundo.
        </p>

        <p>
          En esta aplicación podrás ver películas registradas,
          buscarlas por nombre y gestionar la información de cada una.
        </p>

        <button onClick={cerrar}>
          Aceptar
        </button>

      </div>

    </div>
  );
}

export default Info;