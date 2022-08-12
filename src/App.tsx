import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './component/about.component';
import Home from './component/home.component';
import Login from './component/login.component';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='login' element={<Login/>} />
          <Route path='about' element={<About/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;