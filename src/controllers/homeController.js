import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catService.getAll();

    res.render('home', { 
        isHome: true,
        cats
    });
});

router.get('/search', async (req, res) => {
    const query = req.query;
    const cats = await catService.getAll(query);

    res.render('home', {
        isHome: true,
        query,
        cats
    });
});

export default router;