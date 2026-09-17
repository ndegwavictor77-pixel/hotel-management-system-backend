import express from "express";
import { createRoomType, getAllRoomTypes, getRoomTypeById, updateRoomType, deleteRoomType } from "../controllers/roomtypecontroller.js";

const router = express.Router();

router.post("/", createRoomType);
router.get("/", getAllRoomTypes);
router.get("/:id", getRoomTypeById);
router.put("/:id", updateRoomType);
router.delete("/:id", deleteRoomType);

export default router;