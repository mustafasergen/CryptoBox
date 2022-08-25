import React, {Component, useEffect, useState} from 'react';
import { Card, notification, Spin} from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';




const { Header, Footer, Content } = Layout;




export default function Login () {
    

      
      type NotificationType = 'info';
      const openNotificationWithIcon = (type: NotificationType) => {
          notification[type]({
            message: 'Notification Title',
            description:
              'Önce bu hesap ile kayıt yapınız',
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
              openNotificationWithIcon('info');
 
            }else if (role == 'Parent'){
              console.log('parent')
              setLoading(false);
            }
            
          })
    
        })
      }, []);



      
        return(
        <div>
            <Layout>
            <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                <Avatar style={{position:'absolute', right:100, top:35,}} src= './coin2.png' />

                <Link to="/"><Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" /></Link>
                
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

               <Button style={{position:'absolute', right:530, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/meta_mask">METAMASK NEDİR?</Link></Button>   

               <Button style={{position:'absolute', right:780, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
               
                type="link" danger><Link to="/about">HAKKIMIZDA</Link></Button>       
                               
                <Button style={{position:'absolute', right:450, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/faq">FAQ</Link></Button>                       
               
                <Button style={{position:'absolute', right:180, top:25, width:'110px', height:'50px',borderColor:'#13C2C2',borderWidth:'5px', color:'#13C2C2',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">Oturum aç</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary"><Link to="/yenideneme">Kayıt ol</Link></Button>
              </Header>
              <Layout>
              <Content style={{backgroundImage: "url(" + "./blur.png" + ")",
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

   

                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>
                <Spin spinning={loading}>
                

                                
                <Link to='/after_signup'><Button style={{position:'absolute', right:340, marginTop:'280px', width:'500px', height:'80px', color:'black',fontWeight:'bold',backgroundImage:"./Metamask.png",
                textAlign:'center',fontSize:'25px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                >Giriş Yapın</Button></Link>

                </Spin>
                </Card.Grid>

                </Content>

                <Footer style={{background:"white", padding:60,}}>
                  <h2 style={{position:'absolute', right:1000,}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    

}
