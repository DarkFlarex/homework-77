import BookMessage from "./features/BookMessages/containers/BookMessage.tsx";
import './App.css'
import {Container} from "@mui/material";

const App = () => {

  return (
    <>
        <Container maxWidth="xl" component="main">
            <BookMessage/>
        </Container>
    </>
  )
}

export default App
