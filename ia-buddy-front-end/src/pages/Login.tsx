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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation des champs
    if (!username || !password) {
      console.log("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      console.log(response.data.username);
      const { userInfo } = response.data.username; // Assurez-vous que l'API renvoie userName
      store.login(userInfo); // Mettre à jour le store
      navigate("/chat/1"); // Rediriger après connexion réussie
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">AI Buddy</h1>
        <p className="login-description">Inscription</p>

        <ul>
          <li>
            <label htmlFor="username">Identifiant</label>
            <input
              id="username"
              type="text"
              placeholder="Entrez votre email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>

          <li>
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>

          <li>
            <button type="submit">Connexion</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
