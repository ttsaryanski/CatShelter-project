import { Schema, model } from "mongoose";

const breedSchema = new Schema({
    breed: String
});

const Breed = model('Breed', breedSchema);

export default Breed;