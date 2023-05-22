import { useState } from "react";
const BookEdit = ({book, onClose}) => {
const [title, setTitle] = useState(book.title);

const handleChange = (event) => {
    setTitle(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    onClose(book.id, title);
}

    return (
    <form onSubmit={onSubmit} className="book-edit">
        <label>Title</label>
        <input value={title} onChange={handleChange} className="input" />
        <button className="button is-primary">
            Save
        </button>

    </form>
)};

export default BookEdit;