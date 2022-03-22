import { Express } from "express";
import { Router } from "express";

import authRouter from "../auth/index";
const router = Router();

router.use("/", authRouter);

export default router;
