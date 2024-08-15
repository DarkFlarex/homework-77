import {promises as fs} from 'fs';
import {BookMessage, BookMessageMutation} from "./types";
import {randomUUID} from "crypto";

const  fileName = './db.json';
let data: BookMessage[] = [];

const fileDb = {
    async init (){
        try {
            const  fileContents  = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        }catch (e){
            data=[];
        }
    },
    async getItems (){
        return data;
    },
    async addItem(item: BookMessageMutation){
        const bookMessage: BookMessage = {
            ...item,
            id:randomUUID()
        };
        data.push(bookMessage);
        await this.save();
        return bookMessage;
    },
    async save(){
        await fs.writeFile(fileName,JSON.stringify(data, null, 2));
    }
};

export default fileDb;
