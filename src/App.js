import './App.css';
import MyNav from './Components/MyNav';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';  
import NoPage from './Pages/NoPage';  
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MyNav/>      
      
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
