import React, { useEffect } from "react";
import { BookItem } from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBooks } from "../store/slices/bookSlice";
import "../css/books.css";

export function Books() {
  const { books, isLoading } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let bookList = books.map((book) => (
    <BookItem key={book.id} book={book}></BookItem>
  ));

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div>Loading Books</div>
        </div>
      ) : (
        <div className="row">{bookList}</div>
      )}
    </div>
  );
}
