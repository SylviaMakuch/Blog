import express from "express";
import { signin, signout } from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signout", signout);

export default router;
