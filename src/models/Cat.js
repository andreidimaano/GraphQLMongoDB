import mongoose from 'mongoose';
export const kittySchema = new mongoose.Schema({
    name: String
});

export const Kitten = mongoose.model('Kitten', kittySchema);