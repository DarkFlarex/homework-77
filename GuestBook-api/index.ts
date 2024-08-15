import express from "express";
import fileDb from "./fileDb";
import cors from 'cors';
import config from "./config";
import GuestBooksRouter from "./routers/BookMessages";

const app = express();
const port = 8000;

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(express.static('public'))
app.use('/GuestBooks', GuestBooksRouter);

const run = async ()=>{
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};

run().catch(console.error);