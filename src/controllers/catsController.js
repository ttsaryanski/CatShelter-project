import { Router } from "express";
import catService from "../services/catService.js";

const router = Router();

router.get('/search', async (req, res) => {
    const query = req.query;
    const cats = await catService.getAll(query).lean();

    res.render('home', {
        isHome: true,
        query,
        cats
    });
});

router.get('/add-cat', async (req, res) => {
    const breeds = await catService.getBreed().sort({ breed: "ascending" }).lean();

    res.render('cats/addCat', { breeds, isUpload: true });
});

router.get('/add-cat/url', async (req, res) => {
    const breeds = await catService.getBreed().sort({ breed: "ascending"}).lean();

    res.render('cats/addCat', { breeds });
});

router.post('/add-cat/url', async (req, res) => {
    const catData = req.body;

    await catService.create(catData);

    res.redirect('/');
});

router.get('/add-breed', (req, res) => {
    res.render('cats/addBreed');
});

router.post('/add-breed', async (req, res) => {
    const breed = req.body;
    
    await catService.createBreed(breed);

    res.redirect('/');
});

router.get('/:catId/editCat', async (req, res) => {
    const breeds = await catService.getBreed().sort({ breed: "ascending"}).lean();
    const catId = req.params.catId;
    const cat = await catService.getById(catId).lean();

    res.render('cats/editCat', { cat, breeds });
});

router.get('/:catId/catShelter', async (req, res) => {
    const catId = req.params.catId;
    
    const cat = await catService.getById(catId).lean();

    res.render('cats/catShelter', { cat });
});

router.post('/:catId/catShelter', async (req, res) => {
    const catId = req.params.catId;

    await catService.delById(catId) ;

    res.redirect('/');
});

export default router;