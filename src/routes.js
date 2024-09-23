import { Router } from "express";
import homeController from './controllers/homeController.js';
import catsController from './controllers/catsController.js';

const router = Router();

router.use(homeController);
router.use('/cats', catsController);

router.use('*', (req, res) => {
    res.send('<h1>This page not exists</h1>');

    res.end();
})

export default router;