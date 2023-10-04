import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookDetails, BookForm, Books, Home, MyNav } from "./components";

function App() {
  return (
    <>
      <MyNav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="books/:id" element={<BookDetails />}></Route>
        <Route path="books/:id/edit" element={<BookForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
