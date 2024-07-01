import express from "express";
import { getUsers, addInscricao } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addInscricao)

export default router;