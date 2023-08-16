import express from "express";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const router = Router();
const app = express();

app.use(cors());

router.get("/users", async (req, res) => {
  try {
    // Retorna todos os usuarios e armazena em users
    const users = await prisma.user.findMany();
    res.status(200).json(users); // Enviar os usuários como resposta JSON
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o email já está em uso
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email já está em uso" });
    }

    // Criar o novo usuário
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
});

export default router;