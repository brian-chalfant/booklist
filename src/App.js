import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState} from 'react';
import "./index.css";
import axios from "axios";


const App = () => {
    const createBook = async (title) => {
       const response = await axios.post('http://localhost:3001/books', {title});
        const updatedBooks = [
            ...books, response.data
        ];
        setBooks(updatedBooks);
        
    };
    const editBookbyID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title:newTitle};
            }
        return book;
        })
        setBooks(updatedBooks);
    };
    const deleteBookbyID = (id) => {
        const updatedBooks = books.filter((book) => {
           return book.id !== id;
        });
        setBooks(updatedBooks)
    }
    const [books, setBooks] = useState([]);
    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onEdit={editBookbyID} onDelete={deleteBookbyID}/>
        <BookCreate onCreate={createBook}/>
    </div>
};

export default App;