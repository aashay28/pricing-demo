import "./App.css";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import ListedProducts from "./components/ListedProducts/ListedProducts";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ListedProducts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
