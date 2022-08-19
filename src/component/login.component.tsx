import React, {Component} from 'react';
import { Card} from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import useAuth from './auth/useAuth';
import { json } from 'stream/consumers';


const { Header, Footer, Content } = Layout;




export default function Login () {
    

      const auth = useAuth();
      const handleLogin = () =>{
        auth?.signIn({name:'asd', address:'00', role:'parent'},() =>{})
      }

      
      window.scrollTo(0, 0)
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
                
                type="link" danger><Link to="">FAQ</Link></Button>                       
               
                <Button style={{position:'absolute', right:180, top:25, width:'110px', height:'50px',borderColor:'#13C2C2',borderWidth:'5px', color:'#13C2C2',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">Oturum aç</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary"><Link to="/signup">Kayıt ol</Link></Button>
              </Header>
              <Layout>
              <Content style={{backgroundImage: "url(" + "./blur.png" + ")",
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >

   

                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>
                
                <h2 style={{fontWeight:'bold',fontSize:'30px',position:'absolute', left:360,marginTop:'150px',textAlign:'center'}}>
                Sign the message in your wallet to<br/>
                continue.
                </h2>

                <Link to='/privatepage'><Button style={{position:'absolute', right:340, marginTop:'330px', width:'500px', height:'80px', color:'white',fontWeight:'bold',backgroundImage:"./Metamask.png",
                textAlign:'center',fontSize:'25px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                >privatepage</Button></Link>
                                
                <Link to='/publicpage'><Button style={{position:'absolute', right:340, marginTop:'480px', width:'500px', height:'80px', color:'black',fontWeight:'bold',backgroundImage:"./Metamask.png",
                textAlign:'center',fontSize:'25px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                >publicpage</Button></Link>

                <button onClick={handleLogin}>Login</button>

                <div>User {JSON.stringify(auth?.user)}</div>
               


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
