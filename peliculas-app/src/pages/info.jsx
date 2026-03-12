function Info() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      
      <h1>Bienvenido al catálogo de películas</h1>

      <p>
        Este sitio web es una aplicación desarrollada en React que permite
        explorar un catálogo de películas. Los usuarios pueden visualizar
        información sobre distintas películas, incluyendo su nombre, género,
        año de estreno e imagen.
      </p>

      <h2>¿Qué es el cine?</h2>
      <p>
        El cine es una forma de arte y entretenimiento que consiste en la
        proyección de imágenes en movimiento para contar historias, transmitir
        emociones o presentar información al público.
      </p>

      <h2>Géneros de películas</h2>
      <ul>
        <li>Acción</li>
        <li>Comedia</li>
        <li>Ciencia ficción</li>
        <li>Drama</li>
        <li>Terror</li>
        <li>Animación</li>
      </ul>

      <h2>Sobre esta aplicación</h2>
      <p>
        Esta aplicación utiliza React para el desarrollo del frontend y
        Supabase como backend para almacenar la información de las películas.
        Los usuarios autenticados pueden agregar, editar o eliminar películas
        del catálogo.
      </p>

    </div>
  );
}

export default Info;