import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catService.getAll().lean();

    res.render('home', { 
        isHome: true,
        cats
    });
});

export default router;