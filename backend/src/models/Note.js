import mongoose from "mongoose";
    // 1. created schema
    // 2. created model based on schema

const noteSchema = new mongoose.Schema(
{
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    }
},
{ timestamps: true }); //createdAt, updatedAt

const Note = mongoose.model("Note", noteSchema) // create model based on schema i.e noteSchema
export default Note;