import React, {Component, useState} from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { ethers } from 'ethers'
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useNavigate } from "react-router-dom";
declare var window: any








const { Header, Footer, Content } = Layout;







export default function Signup (){
    
      window.scrollTo(0, 0)

      const navigate = useNavigate();
          
      
    



        const [name, setName] = useState("");
        const [surname, setSurname] = useState("");
        
        const handlechangeName = (event: React.ChangeEvent<HTMLInputElement>) =>{
          setName(event.target.value);

        }
        const handlechangeSurname = (event: React.ChangeEvent<HTMLInputElement>) =>{
          setSurname(event.target.value);

        }

        async function getAccount() {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];
        
          return account;
        }
        const [accountAddress, setAccountAddress] = useState("");

        const connectButtonOnClick = () => {
          console.log(window);
          if (
            typeof window !== "undefined" &&
            typeof window.ethereum !== "undefined"
          ) {
            getAccount().then((response) => {
              setAccountAddress(response);
            });
          } else {
            console.log('error');
            navigate("/Nometa_mask");
          }
        };




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

   
                <h1 style={{position:'absolute', left:800, top:180, color:'black',fontSize:'50px',fontWeight:'bold'}}>CryptoBox Hesabınızı Oluşturun
                </h1>
                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>

                  <h2 style={{position:'absolute', left:320, marginTop:'50px', color:'black',fontSize:'30px'}}>
                    Ad
                    <br/>
                    <br/>
                    <br/>
                    Soyad
                  </h2>
                <Input onChange={handlechangeName} style={{position:'absolute', left:320, marginTop:'110px', width:'500px', height:'70px'}} placeholder="İsminizi giriniz" />
                <Input onChange={handlechangeSurname} style={{position:'absolute', left:320, marginTop:'260px', width:'500px', height:'70px'}} placeholder="Soyisminizi giriniz" />
                {name}
                {surname}

                
                 
                <Link to="/after_signup" ><Button style={{position:'absolute', left:370, marginTop:'390px', width:'350px', height:'80px',backgroundColor:'#13C2C2',fontSize:'35px',borderColor:'#13C2C2'}} type="primary"  onClick={connectButtonOnClick}>{!!accountAddress ? accountAddress : "Devam"}</Button></Link>
                <h3 style={{position:'absolute', left:350, marginTop:'540px', color:'black',fontSize:'20px'}}>Zaten bir CryptoBox Hesabınız var mı?
                </h3>
                <Link to="/login" > <h4 style= {{position:'absolute', right:460, marginTop:'540px',color:'blue',fontSize:'20px'}}>Giriş</h4></Link>


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
