import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getBooks } from "../store/slices/bookSlice";
import "../css/books.css";

export function BookDetails() {
  const { id } = useParams();
  const { books } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const book = books.find((book) => book.id == id);
  if (!book) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div>Loading......</div>
      </div>
    );
  }

  const { title, author, publicationYear } = book;

  return (
    <div className="container mt-5">
      <div className="card bg-light border-secondary">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">{title}</h5>
          <p className="card-text">
            <strong>Author:</strong> {author}
          </p>
          <p className="card-text">
            <strong>Publication Year:</strong> {publicationYear}
          </p>
          {/* Add more book details as needed */}
          <NavLink className="btn btn-dark" to="/books">
            go to books
          </NavLink>
        </div>
      </div>
    </div>
  );
}
