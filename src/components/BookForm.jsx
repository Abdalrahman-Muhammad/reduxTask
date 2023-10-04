import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, updateBook } from "../store/slices/bookSlice";

export function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publicationYear: "",
  });

  const { books } = useSelector((state) => state.bookList);
  const editBook = books.find((book) => book.id === parseInt(id));

  useEffect(() => {
    if (editBook) {
      setFormData(editBook);
    }
  }, [editBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "0") {
      dispatch(addBook(formData));
    } else {
      // console.log();
      dispatch(updateBook({ id, ...formData }));
    }
    navigate("/books");
  };

  return (
    <div className="container mt-5">
      {id == 0 ? <h2>Add a New Book</h2> : <h2>Edit Book</h2>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publicationYear" className="form-label">
            Publication Year
          </label>
          <input
            type="number"
            className="form-control"
            id="publicationYear"
            name="publicationYear"
            value={formData.publicationYear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id == 0 ? "Add Book" : "Edit Book"}
        </button>
      </form>
    </div>
  );
}
