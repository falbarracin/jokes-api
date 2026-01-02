import { Router } from "express";
import * as controller from "../controllers/jokes.controller";

const router = Router();

router.get("/:type?", controller.getJoke);
router.post("/", controller.createJoke);
router.put("/:number", controller.updateJoke);
router.delete("/:number", controller.deleteJoke);

export default router;