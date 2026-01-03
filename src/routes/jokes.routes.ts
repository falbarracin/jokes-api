import { Router } from "express";
import * as controller from "../controllers/jokes.controller";
import { getLCM, incrementNumber } from "../controllers/operation.controller";

const router = Router();

router.get("/:type?", controller.getJoke);
router.post("/", controller.createJoke);
router.put("/:number", controller.updateJoke);
router.delete("/:number", controller.deleteJoke);

router.get("/lcm", getLCM);
router.get("/increment", incrementNumber);

export default router;