import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router><div className="light-hue-bg">
        <div className="container-fluid light-hue-bg">
          <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </div>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
// import './App.css';
// import Navbar from './components/Navigation/navbar';
// import Book from './components/Books/Books';
// import Booksummary from './components/Books/Summary'
// function App() {
//   return (
//     <>
//     <div className="light-hue-bg">
//     <div className="container-fluid light-hue-bg">
//       <Navbar/>
//     </div>
//     <div className="image-container">
//           <img src={image} alt="Library" />
//           <div className="book-summary">
//             <Booksummary />
//           </div>
//     </div>
//     <main>
//       <Book />
//     </main>
//     </div>
//    </>
    
//   );
// }

// export default App;