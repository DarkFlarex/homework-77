import {createSlice} from "@reduxjs/toolkit";
import {createBookMessage} from "./bookMessagesThunks.ts";



export interface BookMessagesState {

    isCreating:boolean;
}

const initialState: BookMessagesState = {
    isCreating:false,
};

export const bookMessagesSlice = createSlice({
    name: "bookMessages",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createBookMessage.pending,(state)=>{
            state.isCreating = true;
        }).addCase(createBookMessage.fulfilled,(state)=>{
            state.isCreating = false;
        }).addCase(createBookMessage.rejected,(state)=>{
            state.isCreating = false;
        });
    },
    selectors:{
        selectBookMessageCreating:(state)=> state.isCreating,
    }
});

export const BookMessagesReducer = bookMessagesSlice.reducer;

export const{
    selectBookMessageCreating,
} = bookMessagesSlice.selectors;