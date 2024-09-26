import { Schema, model } from "mongoose";

const breedSchema = new Schema({
    breed: String
});

const Breeds = model('Breeds', breedSchema);

export default Breeds;