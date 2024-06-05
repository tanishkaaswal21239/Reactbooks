import './App.css';
import Navbar from './navbar.js';
import Textform from './textform.js';
import Textar from './textar.js';

function App() {
  return (
    <>
    <div className="light-hue-bg"><Navbar/>
    <div className="container my-3">
      <Textform/>
    </div>
    <Textar/>
    </div>
    </>
    
  );
}

export default App;
