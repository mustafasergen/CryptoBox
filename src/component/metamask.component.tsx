import React, {Component} from 'react';
import { Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;



class MetaMask extends Component {
    render() {
      window.scrollTo(0, 0)
        return(
        <div>
            <Layout>
              <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                <Avatar style={{position:'absolute', right:100, top:35,}} src= './coin2.png' />

                <Link to="/"><Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" /></Link>
               
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">{ML("CryptoBox")}</Link></Button>

               <Button style={{position:'absolute', right:530, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/meta_mask">{ML("METAMASK_NEDIR")}</Link></Button> 

               <Button style={{position:'absolute', right:780, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
               
                type="link" danger><Link to="/about">{ML("HAKKIMIZDA")}</Link></Button>       
                               
                <Button style={{position:'absolute', right:450, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="">{ML("FAQ")}</Link></Button>                       
               
                <Button style={{position:'absolute', right:180, top:25, width:'110px', height:'50px',borderColor:'#13C2C2',borderWidth:'5px', color:'#13C2C2',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">{ML("OTURUM_AC")}</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary"><Link to="/signup">{ML("KAYIT_OL")}</Link></Button>
                 <LanguageComponent/>
              </Header>
              <Layout>
                
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>


                <h2 style={{fontWeight:'regular',fontSize:'25px',position:'absolute', left:280,top:200,textAlign:'center'}}>
                <i style={{fontWeight:'bold',fontSize:'55px',color:'#FA8C16'}} >{ML("METAMASK_NEDIR")}</i>
                <i style={{fontWeight:'bold',fontSize:'45px',color:'#434343',wordSpacing: 3}} ><br/><br/>{ML("Ethereum_Blockchain_ile_etkileşim")}<br/> {ML("kurmak_için_kullanılan_bir_Kripto")}<br/> {ML("Cüzdanıdır.")}</i>
                <i style={{fontWeight:'regular',fontSize:'30px',color:'#434343',wordSpacing: 3}} ><br/><br/>{ML("Token satın alın, saklayın, gönderin ve")}<br/> {ML("değiştirin")}</i>
                <i style={{fontWeight:'regular',fontSize:'33px',color:'#000000',wordSpacing: 3}} ><br/><br/>{ML("Bir tarayıcı uzantısı ve bir mobil uygulama")}<br/>
                {ML("olarak mevcut olan MetaMask, size key")}<br/>
                {ML("vault, güvenli oturum açma, Token")}<br/> 
                {ML("cüzdanı ve Token takası ile dijital")}<br/>
                {ML("varlıklarınızı yönetmek için ihtiyacınız olan")}  <br/>
                {ML("her şeyi sağlar")} 
                </i></h2>

                <Image style={{position:'absolute', left:700,top:-400}}width={800} src="./örnek1.png" />

                </Content>
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{position:'absolute', left:150,top:1400,textAlign:'center'}}>
                <i style={{fontWeight:'bold',fontSize:'35px',color:'#434343'}} >{ML("Blockchain uygulamalarını keşfedin")}</i>
                <i style={{fontWeight:'regular',fontSize:'33px',color:'#000000',wordSpacing: 3}} ><br/><br/>{ML("MetaMask, blok zinciri tabanlı")}<br/>
                {ML("uygulamalara bağlanmanın en basit ama")}<br/>
                {ML("en güvenli yolunu sağlar. Yeni merkezi")}<br/>
                {ML("olmayan_web'de_etkileşim_kurarken")}<br/>
                {ML("kontrol her zaman sizdedir")}</i>
                <i style={{fontWeight:'bold',fontSize:'32px',color:'#434343',wordSpacing: 3}} ><br/><br/>{ML("Verilerinize_sahip_olun")}</i>
                <i style={{fontWeight:'regular',fontSize:'33px',color:'#000000',wordSpacing: 3}} ><br/><br/>{ML("MetaMask_cihazınızda_şifreler_ve")}
                {ML("anahtarlar oluşturur, böylece")}<br/>
                {ML("hesaplarınıza ve verilerinize yalnızca siz")}<br/>
                {ML("erişebilirsiniz. Neyi paylaşacağınızı ve")}<br/>
                {ML("neyi gizli tutacağınızı her zaman siz")}<br/>
                {ML("seçersiniz")}</i></h2>
                  <Image style={{position:'absolute', left:800,top:-550}}width={600} src="./örnek2.png" />
                  <Image style={{position:'absolute', left:800,top:-50}}width={600} src="./örnek3.png" />


                  

                </Content>

                <Content style={{background:"white", 
                padding:300, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                
                <iframe style={{position:'absolute', left:700, top:2450,  width:'1000px', height:'500px'}} src='https://www.youtube.com/embed/YVgfHZMFFFQ ' frameBorder={0} 
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'/>

                </Content>

                <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,}}>{ML("2022_Intertech_Inc_Her_hakkı _saklıdır")}</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    }

}
export default MetaMask; 