import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/add-cat', (req, res) => {
    res.render('cats/addCat');
});

router.get('/add-breed', (req, res) => {
    res.render('cats/addBreed');
});

router.get('/:catId/editCat', async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getById(catId);

    res.render('cats/editCat', { cat });
});

router.get('/:catId/catShelter', async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getById(catId);

    res.render('cats/catShelter', { cat });
});

export default router;