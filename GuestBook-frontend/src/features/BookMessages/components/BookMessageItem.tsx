import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import {API_URL} from "../../../constants.ts";
import styled from "@emotion/styled";

const ImageCardMedia =styled(CardMedia)({
    height:0,
    paddingTop:'56.25%'
});

interface Props{
    author:string;
    message:string;
    image:string|null;
}

const BookMessageItem: React.FC<Props> = ({author,message,image}) => {

    let cardImage;

    if(image){
        cardImage = `${API_URL}/${image}`;
    }

    let cardAuthor;

    if (author) {
        cardAuthor = author;
    } else {
        cardAuthor = "Anonymous";
    }

    return (
        <Grid item sx={{width:'300px',mb:3}}>
            <Card>
                <CardHeader
                    title={cardAuthor}
                    sx={{
                        textAlign: 'left',
                        padding: '8px 16px',
                        fontSize: '20px'
                    }}
                />
                <CardContent
                    sx={{
                        padding: '8px 16px',
                    }}
                >
                    <Typography sx={{padding: '8px 16px', fontSize: '20px',}}>
                        {message}
                    </Typography>
                    <ImageCardMedia image={cardImage} title={author}/>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default BookMessageItem;