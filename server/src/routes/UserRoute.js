import express from "express";
import {
    getUsers
} from "../controller/UserController.js";

const router = express.Router();

router.get('/api/user', getUsers);

export default router;