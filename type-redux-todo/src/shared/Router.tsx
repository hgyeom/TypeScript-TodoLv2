import Detail from "pages/Detail";
import Main from "pages/Main";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
