import express from "express"

import {
    updateUser,
    deleteUser,
    getUser,
    getUsers
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauth",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you can delete  your accaunt")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you logged in you can delete what u want")
// })

// update
router.put("/:id",verifyUser, updateUser);

// delete
router.delete("/:id",verifyUser, deleteUser);

// get
router.get("/:id",verifyUser, getUser);

// getAll
router.get("/",verifyAdmin, getUsers);

export default router