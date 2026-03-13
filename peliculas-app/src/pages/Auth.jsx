import { useState } from "react";
import { supabase } from "../supabaseClient";
import "../styles.css";

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registrarse() {

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Usuario registrado correctamente");
    }
  }

  async function iniciarSesion() {

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Inicio de sesión correcto");
    }
  }

  return (

    <div className="authWrapper">

      <div className="authContainer">

        <h2>Autenticación</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registrarse}>
          Registrarse
        </button>

        <button onClick={iniciarSesion}>
          Iniciar sesión
        </button>

      </div>

    </div>

  );
}

export default Auth;