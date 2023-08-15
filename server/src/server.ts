import Express from "express";
import { PrismaClient } from "@prisma/client";

const app = Express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(Express.json())

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users); // Enviar os usuários como resposta JSON
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
