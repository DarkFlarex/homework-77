import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {selectBookMessageCreating } from "../store/bookMessagesSlice.ts";
import {BookMessageMutation} from "../../../types.ts";
import {createBookMessage} from "../store/bookMessagesThunks.ts";
import BookMessageForm from "../components/BookMessageForm.tsx";


const BookMessage = () => {
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectBookMessageCreating);


    const onFormSubmit = async (bookMessageMutation:BookMessageMutation) =>{
        await dispatch(createBookMessage(bookMessageMutation));
    };


    return (
        <>
            <BookMessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>
        </>
    );
};

export default BookMessage;