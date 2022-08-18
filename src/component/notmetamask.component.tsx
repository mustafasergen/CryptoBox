import React, {Component} from 'react';
import { Card, Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;



class NoMetaMask extends Component {
    render() {
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
                
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>
                  
                <h2 style={{fontWeight:'regular',fontSize:'25px',position:'absolute', left:170,marginTop:'100px',textAlign:'center'}}>
                <p style={{fontWeight:'bold',fontSize:'55px',color:'#FA8C16'}} >Metamask Extension Bulunamadı</p>
                <p style={{fontWeight:'regular',fontSize:'35px',color:'#000000',wordSpacing: 3}} >İnternet tarayıcınızda Metamask’ın<br/>
                 açık ve bağlı olduğunu kontrol<br/> 
                 ediniz.</p>
                <p style={{fontWeight:'regular',fontSize:'35px',color:'#000000',wordSpacing: 3}} >Metamask ile ilgili daha fazla bilgi<br/>
                  öğrenmek için</p></h2>
                <Link to="/meta_mask"><p style={{fontWeight:'bold',fontSize:'35px',color:'#FA8C16',wordSpacing: 3,position:'absolute',left:450,marginTop:'550px',textAlign:'center'}}>“Metamask Nedir?”</p></Link>
                <h2 style={{fontWeight:'regular',fontSize:'35px',position:'absolute',color:'#000000', left:420,marginTop:'600px',textAlign:'center'}}> sayfamıza bakabilirsiniz.</h2>
                  

                

                </Card.Grid>


                </Content>

                <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    }

}
export default NoMetaMask; 