import "../style/login.css";
import { UserStore } from "../context/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const store = UserStore.getInstance();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Validation des champs
    if (!username || !password) {
      console.log("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      const { userName } = response.data;
      store.login(userName); // Mettre à jour le contexte
      navigate("/hub"); // Rediriger vers le hub après connexion réussie
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-title">AI Buddy</h1>
        <p className="login-description">Inscription</p>

        <ul>
          <li>
            <label htmlFor="mail">Identifiant</label>
            <input placeholder="Entrez votre email" type="email" />
          </li>

          <li>
            <label htmlFor="password">Mot de passe</label>
            <input placeholder="Entrez votre mot de passe" type="password" />
          </li>

          <li>
            <button type="submit">Connexion</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
