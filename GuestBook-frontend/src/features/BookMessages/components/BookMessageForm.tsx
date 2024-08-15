import React, {useState} from "react";
import {Grid, TextField} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import {BookMessageMutation} from "../../../types.ts";
import FileInput from "../../../UI/FileInput/FileInput.tsx";

interface Props {
    onSubmit:(BookMessage:BookMessageMutation) => void;
    isLoading:boolean;
}

const BookMessageForm:React.FC<Props> = ({onSubmit, isLoading}) => {
    const [state,setState]=useState<BookMessageMutation>({
        author:'',
        message:'',
        image:null,
    });

    const submitForHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        onSubmit({...state});
        setState({
            author: '',
            message: '',
            image:null,
        });
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=event.target;
        setState(prevState =>({
            ...prevState,
            [name]: value,
        }));
    }
    const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const {name, files} = event.target;
        const value = files && files[0] ? files[0] :null;

        setState((prevState) => ({
            ...prevState,
            [name]:value,
        }));
    };

    return (
        <Grid container component="form" onSubmit={submitForHandler}
              sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: '40%',
                  marginX: 'auto',
                  padding: 2,
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                  background: 'lightskyblue',
                  borderRadius: '5px',
              }}
        >
            <Grid container direction="column" sx={{ width: '85%', mb:2,}}>
                <Grid item>
                    <TextField
                        label="Author"
                        id="author"
                        name="author"
                        value={state.author}
                        onChange={inputChangeHandler}
                        sx={{
                            mb:2,
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        multiline
                        label="Message"
                        id="message"
                        name="message"
                        value={state.message}
                        onChange={inputChangeHandler}
                        sx={{
                            mb:2,
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid item>
                    <FileInput
                        label="Image"
                        name="image"
                        onChange={fileInputChangeHandler}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <LoadingButton
                    type="submit"
                    loading={isLoading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                    sx={{
                        padding: '10px 20px',
                    }}
                >
                    <span>Add</span>
                </LoadingButton>
            </Grid>
        </Grid>
    );
};

export default BookMessageForm;