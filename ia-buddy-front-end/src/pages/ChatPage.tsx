import { useCallback, useState, useEffect } from "react";
import { NavChat } from "../components/NavChat";
import { MenuSVG } from "../svgs/MenuSVG";
import { CloseSVG } from "../svgs/CloseSVG";
import { useNavigate } from "react-router-dom";
import { UserStore } from "../context/auth";

export function ChatPage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const store = UserStore.getInstance();

  const onClick = useCallback(
    (id: number) => {
      setOpen(false);
      navigate("/chat/" + id);
    },
    [navigate]
  );

  function handleLogout() {
    store.logout();
    navigate("/login");
  }

  useEffect(() => {
    const user = UserStore.getInstance().getUser();

    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex h-full flex-col md:flex-row">
      <button onClick={handleLogout}>Déconnexion</button>
      <aside
        className={`${
          open ? "fixed inset-1 left-0 z-40 w-64" : "hidden"
        } md:static md:block  w-full md:w-80 bg-red-1 text-white`}
      >
        <div
          className={`${open ? "absolute" : "hidden"} md:hidden top-2 left-2`}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseSVG />
        </div>

        <nav className={`mt-10 flex flex-col `}>
          <NavChat onClick={onClick} id={1} name="Chat 1" />
          <NavChat onClick={onClick} id={2} name="Chat 2" />
          <NavChat onClick={onClick} id={3} name="Chat 3" />
        </nav>
      </aside>

      <div className="relative flex flex-1 h-full w-full flex-col bg-red-2 text-red-12">
        <div
          className={`${open ? "hidden" : "absolute"} m-4 md:hidden z-10`}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuSVG />
        </div>
        <div className="text-center m-4 border-b-2 border-red-6 pb-2">
          <h1>AI Buddy</h1>
        </div>
        <main className="relative flex flex-col h-full flex-1 overflow-hidden">
          <div className="flex flex-col overflow-auto pb-20">
            <div className="bg-red-3 m-4 p-4 ml-[30%]">
              Bonjour pourrez tu m'aider à trouver où faire les démarches pour
              la CAF
            </div>
            <div className="bg-red-3 m-4 p-4 mr-[20%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, quae laboriosam! Quod assumenda labore veniam
              maiores! Repellendus nulla necessitatibus placeat atque obcaecati
              quod voluptatum odio ad eveniet nam, sunt perspiciatis.
            </div>
            <div className="bg-red-3 m-4 p-4 ml-[30%]">
              Bonjour pourrez tu m'aider à trouver où faire les démarches pour
              la CAF
            </div>
            <div className="bg-red-3 m-4 p-4 mr-[20%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, quae laboriosam! Quod assumenda labore veniam
              maiores! Repellendus nulla necessitatibus placeat atque obcaecati
              quod voluptatum odio ad eveniet nam, sunt perspiciatis.
            </div>
          </div>
          <input
            id="chat"
            name="chat"
            type="text"
            className="absolute z-20 bottom-4 bg-red-3 p-2 w-9/12 sm:w-1/2 left-1/2 -translate-x-1/2 border border-red-6"
            placeholder="Poser une question"
          />
        </main>
      </div>
    </div>
  );
}
