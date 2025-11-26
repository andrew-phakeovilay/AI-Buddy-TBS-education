import { useTranslation } from "react-i18next";
import "../style/login.css"

export function Login() {
  
  const { t } = useTranslation();
  
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-title">AI Buddy</h1>
        <p className="login-description">{t("login-description-form")}</p>

        <ul>
          <li>
            <label htmlFor="id">{t("login-id-label-form")}</label>
            <input placeholder={t("login-id-placeholder-form")} type="id" />
          </li>

          <li>
            <label htmlFor="password">{t("login-password-label-form")}</label>
            <input placeholder={t("login-password-placeholder-form")} type="password" />
          </li>

          <li>
            <button type="submit">{t("login-submit-form")}</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
