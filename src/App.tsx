import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookMarksPage } from './Pages/BookMarksPage';
import { ExplorePage } from './Pages/ExplorePage';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { RegisterPage } from './Pages/RegisterPage';


function App() {

  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/explore" element={<ExplorePage />}></Route>
              <Route path="/bookmarks" element={<BookMarksPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
