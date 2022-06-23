import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Feeds from './Components/Feeds';
import Feed from './Components/Feed';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Navbar';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div style={{maxWidth: 1024, margin: '0 auto'}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="feeds" element={<Feeds />}>
              <Route path=":feed" element={<Feed />} />
            </Route>
            <Route path="*"
              element={
                <main style={{ padding: 20 }}>
                  <p>This is an invalid route !!</p>
                </main>
              }
            />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
