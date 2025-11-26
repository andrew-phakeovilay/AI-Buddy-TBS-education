import { useTranslation } from "react-i18next";

export function Login() {

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <form className="w-full max-w-sm text-center text-black">
        
        <h1 className="text-2xl font-bold mb-1">AI Buddy</h1>
        <p className="text-sm text-gray-400 mb-10">
          {t("login-description-form")}
        </p>

        <ul className="space-y-6">
          <li className="flex flex-col text-left">
            <label htmlFor="id" className="mb-1 text-sm">
              {t("login-id-label-form")}
            </label>

            <input
              placeholder={t("login-id-placeholder-form")}
              type="text"
              id="id"
              className="bg-[#d1d9e6] text-black rounded-md px-3 py-3 text-sm focus:outline-none"
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
