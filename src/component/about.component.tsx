import React, {Component} from 'react';
import { Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';




const { Title } = Typography;
const { Header, Footer, Content } = Layout;



class About extends Component {
    render() {
        return(
        <div>
            <Layout>
              <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100,}}>
                <Avatar style={{position:'absolute', right:100, top:35,}} src= './coin2.png' />
                
                <Avatar style={{position:'absolute', left:30, top:10,width:'150px', height:'75px'}} src= './logo1.png' />
               
                <Button style={{position:'absolute', left:190, top:25, color:'#04ADBF',fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

               <Button style={{position:'absolute', right:450, top:25, color:'#04ADBF', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/about">HAKKIMIZDA</Link></Button>    

               <Button style={{position:'absolute', right:650, top:25, color:'#04ADBF', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/">METAMASK NEDİR?</Link></Button>                              
               
                <Button style={{position:'absolute', right:180, top:25, width:'100px', height:'50px',borderColor:'#04ADBF',borderWidth:'5px', color:'#04ADBF',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">Login</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#04ADBF', borderColor:'#04ADBF' }} 
                
                type="primary">Register</Button>
              </Header>
              <Layout>
                <Content style={{background:"#04ADBF", 
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >
                <h2 style={{position:'absolute',color:'white', right:1400, top:600}}> </h2>

                </Content>

                <Footer style={{background:"white", padding:60,}}>
                  <h2 style={{position:'absolute', right:1000,}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    }

}
export default About; 