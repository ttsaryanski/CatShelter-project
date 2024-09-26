import express from 'express';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';

import routes from './routes.js';

try {
    await mongoose.connect('mongodb://localhost:27017/catShelter');

    console.log('Successfully connect!');
    
} catch (error) {
    console.log("Failed to connect");
    console.log(error.message);
}

const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


