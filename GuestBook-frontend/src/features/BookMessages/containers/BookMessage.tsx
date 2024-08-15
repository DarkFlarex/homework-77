import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {selectBookMessageCreating, selectBookMessages, selectBookMessagesFetching} from "../store/bookMessagesSlice.ts";
import {BookMessageMutation} from "../../../types.ts";
import {createBookMessage, fetchBookMessages} from "../store/bookMessagesThunks.ts";
import BookMessageForm from "../components/BookMessageForm.tsx";
import {CircularProgress, Grid} from "@mui/material";
import BookMessageItem from "../components/BookMessageItem.tsx";
import {useEffect} from "react";

const BookMessage = () => {
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectBookMessageCreating);
    const BookMessages = useAppSelector(selectBookMessages);
    const isFetching = useAppSelector(selectBookMessagesFetching);

    useEffect(() => {
        dispatch(fetchBookMessages());
        const interval = setInterval(() => {
            dispatch(fetchBookMessages());
        }, 3000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const onFormSubmit = async (bookMessageMutation:BookMessageMutation) =>{
        await dispatch(createBookMessage(bookMessageMutation));
    };

    return (
        <>
            <BookMessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>
            <Grid container direction="column" spacing={2}
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: '200px' }}
            >
                {isFetching && <Grid item> <CircularProgress/> </Grid>}
                {BookMessages.map(bookMessage => (
                    <BookMessageItem
                        key={bookMessage.id}
                        author={bookMessage.author}
                        message={bookMessage.message}
                        image={bookMessage.image}
                    />
                ))}
            </Grid>
        </>
    );
};

export default BookMessage;