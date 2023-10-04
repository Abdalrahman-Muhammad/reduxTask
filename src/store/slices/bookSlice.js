import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/books";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(BASE_URL, book);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Delete failed");
    }
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { id, ...restOfBook } = book;
    console.log(book);
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, restOfBook);
      console.log("🚀 ~ file: bookSlice.js:58 ~ response.data:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
      console.log(`book deleted`);
    },
    [updateBook.fulfilled]: (state, action) => {
      const updatedBook = action.payload;
      console.log("🚀 ~ file: bookSlice.js:89 ~ updatedBook:", updatedBook);

      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        console.log(updatedBook);
        state.books[index] = updatedBook;
      }
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
