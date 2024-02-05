import { Router } from "express";
import { checkAuth } from "./lib/middlewares.js";
const router = Router();

router.use(checkAuth);

router.get("/", (req, res) => {
  res.status(200).json("Dashboard Home");
});

export default router;