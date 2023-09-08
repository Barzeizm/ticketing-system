import express from "express";
import {
    getCards
} from "../controller/CardsController.js";

const router = express.Router();

router.get('/api/cards', getCards);

export default router;