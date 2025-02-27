// write the book component code here
import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{book.name}</h3>
        <p className="book-author">Author: {book.author}</p>
        <p className="book-genre">Genre: {book.genre}</p>
      </div>
    </div>
  );
};

export default BookCard;