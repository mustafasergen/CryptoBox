import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './component/about.component';
import AfterSignup from './component/aftersignup.component';
import Home from './component/home.component';
import Login from './component/login.component';
import Metamask from './component/metamask.component';
import Signup from './component/signup.component';
import NoMetaMask from './component/notmetamask.component';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='about' element={<About/>} />
          <Route path='meta_mask' element={<Metamask/>} />
          <Route path='Nometa_mask' element={<NoMetaMask/>} />
          <Route path='after_signup' element={<AfterSignup/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;