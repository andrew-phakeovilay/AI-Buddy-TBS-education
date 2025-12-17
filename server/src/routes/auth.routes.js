import { Router } from "express";
import { fakeDB } from "../db/fakeDb.js";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const fakeUser = fakeDB.fakeUser
  // Vérifier que les champs existent
  if (!username || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }

  // Exemples de valeurs test (à remplacer par ta base de données plus tard)
  

  if (username === fakeUser.username && password === fakeUser.password) {
    return res.json({ message: "Connexion réussie !", username });
  }

  return res.status(401).json({ error: "Identifiants incorrects" });
});

export default router;
