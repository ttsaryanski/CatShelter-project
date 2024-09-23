import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catService.getAll();

    res.render('home', { cats });
});

export default router;