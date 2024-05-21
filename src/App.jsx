

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Checkout from "./components/Checkout/Checkout";
import Main from "./components/Main/Main";
import "./App.css";

const App = () => {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
          </Route> 

      </Routes></BrowserRouter>
  );
};

export default App;
