import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Info from "./pages/info";
import Auth from "./pages/Auth";
import "./styles.css";

function App() {

  const [session, setSession] = useState(null);
  const [mostrarInfo, setMostrarInfo] = useState(true);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();

  }, []);

  useEffect(() => {
    if (session) {
      obtenerPeliculas();
    }
  }, [session]);


  async function obtenerPeliculas() {

    const { data, error } = await supabase
      .from("movies")
      .select("*");

    if (!error) {
      setPeliculas(data);
    }

  }

  async function cerrarSesion() {
    await supabase.auth.signOut();
    setSession(null);
  }

  if (!session) {
    return <Auth />;
  }

  return (
    <div>

      {mostrarInfo && (
        <Info cerrar={() => setMostrarInfo(false)} />
      )}

      <button className="logoutButton" onClick={cerrarSesion}>
        Cerrar sesión
      </button>

      <header className="header">
        <h1>Catálogo de Películas</h1>
      </header>

      <div className="contenedorPeliculas">

        {peliculas.map((pelicula) => (

          <div className="tarjetaPelicula" key={pelicula.id}>

          <img
  src={pelicula.Imagen || "https://picsum.photos/300/450"}
  alt={pelicula.Nombre}
/>
            <h3>{pelicula.Nombre}</h3>

            <p>{pelicula["Año"]}</p>

            <p>{pelicula.Genero}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;