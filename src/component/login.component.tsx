import React, {Component, useEffect, useState} from 'react';
import { Card, notification, Spin} from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';
import { NotificationPlacement } from 'antd/lib/notification';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';




const { Header, Footer, Content } = Layout;




export default function Login () {
    

  type NotificationType = "info"| 'warning';
  const openNotificationWithIcon = (type: NotificationType, placement: NotificationPlacement) => {
    notification.info({
      message: `Bilgilendirme Mesajı `,
      description:
      "Lütfen Önce Hesap Oluşturun",
      placement,
    });
  };

      window.scrollTo(0, 0)
      

      const navigate = useNavigate();

      const [loading, setLoading] = useState(true);
      useEffect(() => {
        WalletService.connect().then(() => {
          WalletService.contract.getRole().then((role: string) => {
            
            if (role == 'Unregistered') {
              // setTimeout(() => {console.log("this is the first message")}, 10000);
              openNotificationWithIcon('info','bottom');
 
            }else if (role == 'Parent' || role =='Child'){
              console.log('parent or Child')
              setLoading(false);
            }
            
          })
    
        })
      }, []);



      
        return(
        <div>
            <Layout>
            <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                

                <Link to="/"><Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" /></Link>
                
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

               <Button style={{position:'absolute', right:530, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/meta_mask">{ML("METAMASK_NEDIR")}</Link></Button>   

               <Button style={{position:'absolute', right:780, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
               
                type="link" danger><Link to="/about">{ML("HAKKIMIZDA")}</Link></Button>       
                               
                <Button style={{position:'absolute', right:450, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/faq">FAQ</Link></Button>                       
               
                <Button style={{position:'absolute', right:180, top:25, width:'110px', height:'50px',borderColor:'#13C2C2',borderWidth:'5px', color:'#13C2C2',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">{ML("OTURUM_AC")}</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary"><Link to="/yenideneme">{ML("KAYIT_OL")}</Link></Button>
                <LanguageComponent/>
              </Header>
              <Layout>
              <Content style={{backgroundImage: "url(" + "./blur.png" + ")",
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

   

                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>
                <Spin
                    style={{marginTop:'290px'}}
                    spinning={loading}
                    tip={
                      <h2 style={{ color: "blue" }}>
                        {ML("KAYIT_OLMADIYSANIZ_LUTFEN_KAYIT_OLUNUZ_EGER_KAYITLI_HESABINIZ_VARSA_GIRIS_YAPINIZ")}
                      </h2>
                    }
                    size="large"
                  >     
                <Link to='/after_signup'><Button style={{position:'absolute', right:340, marginTop:'200px', width:'500px', height:'80px', color:'white',fontWeight:'bold',
                textAlign:'center',fontSize:'25px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} >{ML("EBEVEYN_HESABI_OLARAK_GIRIS_YAPINIZ")}</Button></Link>
                <Link to='/after_signup_child'><Button style={{position:'absolute', right:340, marginTop:'360px', width:'500px', height:'80px', color:'white',fontWeight:'bold',
                textAlign:'center',fontSize:'25px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} >{ML("COCUK_HESABI_OLARAK_GIRIS_YAPINIZ")}</Button></Link>

                </Spin>
                </Card.Grid>

                </Content>

                <Footer style={{background:"white", padding:60,}}>
                  <h2 style={{position:'absolute', right:1000,}}> {ML("2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR")}</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    

}
