import express from "express"
import { verifyAdmin } from "../utils/verifyToken.js";
import {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoomAvailability
} from "../controllers/room.controller.js"

const router =express.Router();

// create
router.post("/:hotelid",verifyAdmin, createRoom);

// update
router.put("/:id",verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

// get
router.get("/find/:id", getRoom);

// getAll
router.get("/", getRooms);

export default router