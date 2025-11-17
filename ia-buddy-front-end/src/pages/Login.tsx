import "../style/login.css"

export function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-title">AI Buddy</h1>
        <p className="login-description">Description</p>

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
