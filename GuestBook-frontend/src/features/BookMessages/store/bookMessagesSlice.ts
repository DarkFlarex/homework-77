import {createSlice} from "@reduxjs/toolkit";
import {createBookMessage, fetchBookMessages} from "./bookMessagesThunks.ts";
import {BookMessage} from "../../../types.ts";


export interface BookMessagesState {
    items:BookMessage[];
    itemsFetching:boolean;
    isCreating:boolean;
}

const initialState: BookMessagesState = {
    items:[],
    itemsFetching: false,
    isCreating:false,
};

export const bookMessagesSlice = createSlice({
    name: "bookMessages",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBookMessages.pending,(state)=>{
            state.itemsFetching = true;
        }).addCase(fetchBookMessages.fulfilled,(state,{payload:bookMessages})=>{
            state.itemsFetching = false;
            state.items = bookMessages;
        }).addCase(fetchBookMessages.rejected,(state)=>{
            state.itemsFetching = false;
        });
        builder.addCase(createBookMessage.pending,(state)=>{
            state.isCreating = true;
        }).addCase(createBookMessage.fulfilled,(state)=>{
            state.isCreating = false;
        }).addCase(createBookMessage.rejected,(state)=>{
            state.isCreating = false;
        });
    },
    selectors:{
        selectBookMessages:(state)=> state.items,
        selectBookMessagesFetching:(state)=> state.itemsFetching,
        selectBookMessageCreating:(state)=> state.isCreating,
    }
});

export const BookMessagesReducer = bookMessagesSlice.reducer;

export const{
    selectBookMessages,
    selectBookMessagesFetching,
    selectBookMessageCreating,
} = bookMessagesSlice.selectors;