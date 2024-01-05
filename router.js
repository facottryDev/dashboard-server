import { callAuth } from "./lib/middlewares.js";
import { Router } from "express";
const router = Router();

// router.use(callAuth);

router.get("/", (req, res) => {
  res.status(200).json("HOME");
});

export default router;