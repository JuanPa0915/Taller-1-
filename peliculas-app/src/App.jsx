import { useEffect } from "react";
import { supabase } from "./supabaseClient";
import Info from "./pages/info";

function App() {

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  async function obtenerPeliculas() {
    const { data, error } = await supabase
      .from("movies")
      .select("*");

    console.log("Peliculas:", data);
    console.log("Error:", error);
  }

  return (
    <div>
      <h1>App de Películas</h1>

      {/* Pantalla informativa */}
      <Info />

    </div>
  );
}

export default App;