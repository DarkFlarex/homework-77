import {createAsyncThunk} from "@reduxjs/toolkit";
import { BookMessageMutation} from "../../../types.ts";
import axiosApi from "../../../axiosApi.ts";

export const createBookMessage = createAsyncThunk<void, BookMessageMutation>(
    'GuestBooks/create',
    async (bookMessageMutation) =>{
        const formData = new FormData();
        formData.append('author',bookMessageMutation.author);
        formData.append('message',bookMessageMutation.message);
        if(bookMessageMutation.image){
            formData.append('image', bookMessageMutation.image);
        }

        await axiosApi.post('/GuestBooks',formData);
    }
);