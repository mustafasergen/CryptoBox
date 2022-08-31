import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/about.component';
import Home from './component/home.component';
import Login from './component/login.component';
import Metamask from './component/metamask.component';
import NoMetaMask from './component/notmetamask.component';
import PrivatePage from './component/PrivatePage';
import AuthProvider, { AuthRef, useAuth } from './component/auth/AuthProvider';
import PrivateRoute from './component/auth/PrivateRoute';
import FAQ from './component/FAQ.component';
import AfterSignupParent from './component/aftersignup.component';
import Cocuk from './component/cocuklarim';
import ParaGonderme from './component/paragonderme.component';
import Paracekme from './component/paracekme.component';
import Basari from './component/basari.component';
import NewLogin from './component/signupnew';
import AfterSignupChild from './component/afterchild_signup';
import ParacekmeCocuk from './component/paracekmecocuk';
import CocukEkleYeni from './component/cocukekleyeni';





function App() {
  // TODO: Eğer kullanıcı local storeage bilgilerini user hakkında bilgi varsa signin tetiklencek

  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <CheckAuthProvider />
          <Routes>
            <Route path='signin' element={<Login />} />
            <Route path='about' element={<About />} />
            <Route path='meta_mask' element={<Metamask />} />
            <Route path='Nometa_mask' element={<NoMetaMask />} />
            <Route path='sendETH' element={<ParaGonderme />} />
            <Route path='basari' element={<Basari />} />
            <Route path='takeETH' element={<Paracekme />} />
            <Route path='takeETH_child' element={<ParacekmeCocuk />} />
            <Route path='addchild' element={<CocukEkleYeni />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='after_signup_child' element={<AfterSignupChild />} />
            <Route path='after_signup_parent' element={<AfterSignupParent />} />
            <Route path='children' element={<Cocuk/>} />
            <Route path='signup' element={<NewLogin/>} />
            <Route path='privatepage' element={<PrivateRoute node={<PrivatePage />} />} />
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