import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

const app = express();

// Autorise le front à faire des requêtes API
app.use(cors());

// Active le JSON pour POST/PUT
app.use(express.json());

// Route /api/login
app.use("/api", authRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur API lancé sur http://localhost:${PORT}`);
});
