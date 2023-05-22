import {useState} from 'react';
import BookEdit from './BookEdit'

const BookShow = ({book, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClose = (id, newTitle) => {
        onEdit(id, newTitle)
        setShowEdit(false);
    }

    const handleDeleteClick = () => {
        onDelete(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit onClose={handleEditClose} book={book}/>
    }

    return <div className="book-show">
                <img alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
               <div>{content}</div> 

        <div className="actions">
            <button className="edit" onClick={handleEditClick} >Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
        </div>
};

export default BookShow;