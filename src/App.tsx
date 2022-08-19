import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/about.component';
import AfterSignup from './component/aftersignup.component';
import Home from './component/home.component';
import Login from './component/login.component';
import Metamask from './component/metamask.component';
import Signup from './component/signup.component';
import NoMetaMask from './component/notmetamask.component';
import PrivatePage from './component/PrivatePage';
import PublicPage from './component/PublicPage';
import AuthProvider, { AuthRef, useAuth } from './component/auth/AuthProvider';
import PrivateRoute from './component/auth/PrivateRoute';




function App() {
  // TODO: Eğer kullanıcı logel storega bilgilerini user hakkında bilgi varsa signin tetiklencek

  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <CheckAuthProvider />
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='about' element={<About />} />
            <Route path='meta_mask' element={<Metamask />} />
            <Route path='Nometa_mask' element={<NoMetaMask />} />
            <Route path='after_signup' element={<AfterSignup />} />
            <Route path='privatepage' element={<PrivateRoute node={<PrivatePage />} />} />
            <Route path='publicpage' element={<PublicPage />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

function CheckAuthProvider() {
  const auth = useAuth();
  AuthRef.current = auth;
  return <></>
}

export default App;