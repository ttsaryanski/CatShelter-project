import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catService.getAll().sort({ createdAt: -1 }).lean();

    res.render('home', { 
        isHome: true,
        cats
    });
});

router.get('/search', async (req, res) => {
    const query = req.query;
    const cats = await catService.getAll(query).sort({ createdAt: -1 }).lean();

    res.render('home', {
        isHome: true,
        query,
        cats
    });
});

export default router;