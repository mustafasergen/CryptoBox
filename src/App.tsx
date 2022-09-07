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
import Parent from './component/parent';
import MyChildren from './component/mychildren';
import SendMoney from './component/sendmoney';
import WithDrawParent from './component/withdrawparent';
import Basari from './component/basari.component';
import Register from './component/register';
import WithDrawChild from './component/withdrawchild';
import AddChildren from './component/addchildren';
import Children from './component/child';
import FAQ from './component/faq.component';






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
            <Route path='sendETH' element={<SendMoney />} />
            <Route path='basari' element={<Basari />} />
            <Route path='takeETH' element={<WithDrawParent />} />
            <Route path='takeETH_child' element={<WithDrawChild />} />
            <Route path='addchild' element={<AddChildren />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='after_signup_child' element={<Children />} />
            <Route path='after_signup_parent' element={<Parent />} />
            <Route path='children' element={<MyChildren/>} />
            <Route path='signup' element={<Register/>} />
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