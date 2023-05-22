import {useState} from 'react';

const BookCreate = ({onCreate}) => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(value.trim() != ""){
            onCreate(value);
        }
        setValue("");
    };
    return <div className="book-create">
        <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title</label>
        <input className="input" value={value} onChange={handleChange} type='text'></input>
        <button className="button">Submit</button>
        </form>

    </div>
};

export default BookCreate;