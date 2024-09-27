import express from 'express';
import mongooseInit from './config/mongooseInit.js';
import expressInit from './config/expressInit.js';
import handlebarsInit from './config/handlebarsInit.js';

import routes from './routes.js';

const app = express();
const port = 5000;

mongooseInit();
handlebarsInit(app);
expressInit(app); 

app.use(routes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


