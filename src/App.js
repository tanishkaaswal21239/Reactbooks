import './App.css';
import Navbar from './components/Navigation/navbar';
import Book from './components/Books/Books';
import image from './components/assets/booi.webp';
import Booksummary from './components/Books/Summary'
function App() {
  return (
    <>
    <div className="light-hue-bg">
    <div className="container-fluid light-hue-bg">
      <Navbar/>
    </div>
    <div className="image-container">
          <img src={image} alt="Library" />
          <div className="book-summary">
            <Booksummary />
          </div>
    </div>
    <main>
      <Book />
    </main>
    </div>
   </>
    
  );
}

export default App;