import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage"
import CreatePost from "./CreatePost"
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/create/posts' element={<Posts/>} />
      </Routes>

    
    </div>
  );
}

export default App;
