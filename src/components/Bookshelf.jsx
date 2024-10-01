import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState ({
        title: '',
        author: ''
    })
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setNewBook((prevNewBook) => ({
            ...prevNewBook,
            [name]: value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setBooks((prevBooks) => [...prevBooks, newBook]) 
        setNewBook({ title: '', author: '' });
    };
   
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="titleInput">Title:</label>
                        <input 
                        type="text" 
                        name='title' 
                        id='titleInput' 
                        value={newBook.title} 
                        onChange={handleInputChange}
                        />
                        <label htmlFor="authorInput">Author:</label>
                        <input 
                        type="text" 
                        name='author' 
                        id='authorInput' 
                        value={newBook.author}
                        onChange={handleInputChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                    
            </div>
            <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h4>Title: {book.title}</h4>
                            <p>Author: {book.author}</p>
                        </div>
                ))}
            </div>
        </div>
    );
}; 

export default Bookshelf