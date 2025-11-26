import { useTranslation } from "react-i18next";
import { UserStore } from "../context/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const store = UserStore.getInstance();

  const { t } = useTranslation();

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
    <div className="min-h-screen bg-white flex justify-center items-center">
      <form className="w-full max-w-sm text-center text-black" onSubmit={handleSubmit}>
        
        <h1 className="text-2xl font-bold mb-1">AI Buddy</h1>
        <p className="text-sm text-gray-400 mb-10">
          {t("login-description-form")}
        </p>

        <ul className="space-y-6">
          <li className="flex flex-col text-left">
            <label htmlFor="username" className="mb-1 text-sm">
              {t("login-id-label-form")}
            </label>

            <input
              placeholder={t("login-id-placeholder-form")}
              type="text"
              id="username"
              className="bg-[#d1d9e6] text-black rounded-md px-3 py-3 text-sm focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>

          <li className="flex flex-col text-left">
            <label htmlFor="password" className="mb-1 text-sm">
              {t("login-password-label-form")}
            </label>

            <input
              placeholder={t("login-password-placeholder-form")}
              type="password"
              id="password"
              className="bg-[#d1d9e6] text-black rounded-md px-3 py-3 text-sm focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>

          <li className="flex justify-center">
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-400 text-white px-6 py-3 text-base rounded-md cursor-pointer transition w-1/2"
            >
              {t("login-submit-form")}
            </button>
          </li>
        </ul>

      </form>
    </div>
  );
}
