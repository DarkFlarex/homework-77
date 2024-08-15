import express from "express";
import fileDb from "../fileDb";
import {BookMessageMutation} from "../types";
import {imagesUpload} from "../multer";

const GuestBooksRouter = express.Router();

GuestBooksRouter.get('/', async (req,res)=>{
    const bookMessage = await fileDb.getItems();

    res.send(bookMessage);
});

GuestBooksRouter.post('/', imagesUpload.single('image'), async (req, res)=>{
    if (!req.body.message){
        return res.status(400).send({error:'message required!'})
    }

    const bookMessage: BookMessageMutation = {
        author: req.body.author,
        message:req.body.message,
        image: req.file ? req.file.filename: null,
    };

    const savedBookMessage = await fileDb.addItem(bookMessage);

    res.send(savedBookMessage);
});

export default GuestBooksRouter;