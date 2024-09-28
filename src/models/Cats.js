import { Schema, model } from "mongoose";

const catSchema = new Schema({
    name: String,
    imageUrl: String,
    breed: String,
    description: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cats = model('Cats', catSchema);

export default Cats;