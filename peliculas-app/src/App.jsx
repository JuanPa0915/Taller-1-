import { useEffect } from "react";
import { supabase } from "./supabaseClient";

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
    </div>
  );
}

export default App;