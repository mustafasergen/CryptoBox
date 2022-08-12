import React, {Component} from 'react';
import { Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;



class Home extends Component {
    render() {
        return(
        <div>
            <Layout>
              <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                <Avatar style={{position:'absolute', right:100, top:35,}} src= './coin2.png' />

                <Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" />
               
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

               <Button style={{position:'absolute', right:450, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="/about">HAKKIMIZDA</Link></Button>    

               <Button style={{position:'absolute', right:650, top:25, color:'#13C2C2', fontWeight:'bold',fontSize:'25px'}}
                
                type="link" danger><Link to="">METAMASK NEDİR?</Link></Button>                              
               
                <Button style={{position:'absolute', right:180, top:25, width:'110px', height:'50px',borderColor:'#13C2C2',borderWidth:'5px', color:'#13C2C2',fontWeight:'bold',fontSize:'15px' }} 
                
                type="primary" ghost><Link to="/login">Oturum aç</Link></Button>
                <Button style={{position:'absolute', right:320, top:25, width:'100px', height:'50px', color:'white',fontWeight:'bold',fontSize:'15px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary">Kayıt ol</Button>
              </Header>
              <Layout>
                
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <h2 style={{position:'absolute', left:150,color:"#434343",top:280,fontWeight:'bold',fontSize:'40px',fontFamily:'Verdana'}}><text>YATIRIMINIZ<br/>
                ÇOCUĞUNUZLA BERABER BÜYÜSÜN!
                </text></h2>
                <h2 style={{position:'absolute', left:150,color:"#434343",top:420,fontSize:'25px',fontWeight:'Regular',fontFamily:'Verdana'}}><text>Bebeğinizin size doğru attığı ilk adımlar gibi siz de onun <br/>
                geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için<br/>
                açacağınız hesapla onun için kripto para biriktirebilirsiniz.<br/><br/>
                Eğer
                </text></h2>

                <h2 style={{position:'absolute', left:200,color:"#434343",top:700,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}><text>MetaMask hesabınız varsa</text></h2>
                <h2 style={{position:'absolute', left:200,color:"#434343",top:850,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}><text>Ethereum Networkünde ise</text></h2>
                <h2 style={{position:'absolute', left:200,color:"#434343",top:1000,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}><text>Bir miktar Ethereum’unuz varsa</text></h2>

                <Avatar style={{position:'absolute', left:1400, top:200,width:'850px', height:'850px'}} src= './circle1.png' />
                <Image style={{position:'absolute', left:800,top:-500}}width={500} src="./anne1.png" />
                <Image style={{position:'absolute', left:700,top:-150}}width={500} src="./anne2.png" />
                

                

                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:680,fontSize:'90px'}} />
                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:830,fontSize:'90px'}} />
                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:980,fontSize:'90px'}} />


                <Button style={{position:'absolute', left:270, top:1100, width:'280', height:'80px', color:'white',fontWeight:'bold',fontSize:'30px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary">Hemen Başlayın</Button>
                
                </Content>

                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                
                <Image style={{position:'absolute', left:100,top:-500}}width={1200} src="./computer1.png" />
                </Content>
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                
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
export default Home; 