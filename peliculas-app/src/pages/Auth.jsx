import { useState } from "react";
import { supabase } from "../supabaseClient";
import "../styles.css";

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  async function registrarse() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      alert("Error al registrarse: " + error.message);
    } else {
      alert("¡Registro exitoso! Por favor, revisa tu correo para confirmar tu cuenta (o desactiva 'Confirm Email' en el dashboard de Supabase).");
    }
    setLoading(false);
  }

  async function iniciarSesion() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      if (error.message === "Email not confirmed") {
        alert("Error: El correo no ha sido confirmado. Revisa tu bandeja de entrada.");
      } else {
        alert("Error al iniciar sesión: " + error.message);
      }
    } else {
      alert("Inicio de sesión correcto");
    }
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      iniciarSesion();
    } else {
      registrarse();
    }
  };

  return (

    <div className="authWrapper">

      <form className="authContainer" onSubmit={handleSubmit}>

        <div className="authHeader">
          <h2>{isLogin ? "Bienvenido" : "Crea tu cuenta"}</h2>
          <p>{isLogin ? "Accede a tu catálogo de películas" : "Regístrate para ver el catálogo"}</p>
        </div>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : (isLogin ? "Iniciar sesión" : "Registrarse")}
        </button>

        <div className="authToggle">
          <span>{isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}</span>
          <button 
            type="button" 
            className="toggleLink" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Regístrate aquí" : "Inicia sesión"}
          </button>
        </div>

      </form>

    </div>

  );
}


export default Auth;