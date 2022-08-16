import React, {Component} from 'react';
import { Card, Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;





class About extends Component {
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
                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:650, top:200,backgroundColor:'#E6FFFB'}}>
                <i style={{fontWeight:'bold',fontSize:'35px',position:'absolute', left:520,marginTop:'30px',textAlign:'center',color:'#434343'}}>BİZ KİMİZ?</i>
                <i style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:330,marginTop:'100px',textAlign:'center'}}>Biz INTERTECH şirketinde 2022 yılı Ağustos dönemi stajyerlerinden</i>
                <i style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:430,marginTop:'130px',textAlign:'center'}}>Takım 2’yiz! Ve sizinle de aynı takımdayız</i>
                <i style={{fontWeight:'bold',fontSize:'20px',position:'absolute', left:540,marginTop:'170px',color:'#434343'}}>Takım üyeleri:</i>
                <i style={{fontWeight:'bold',fontSize:'20px',position:'absolute', left:500,marginTop:'210px',textAlign:'center'}}>
                  Anıl Çetin<br/>
                  Çağdaş Çapuk<br/>
                  Elif Ezgi İzgin<br/>
                  Emine Çiğ<br/>
                  Hasan Yiğit Kaya<br/>
                  Irmak Özügüzel<br/>
                  Mustafa Sergen Haysal<br/>
                  Sezgin Kale<br/>
                  Zeynep Özer
                  </i>
                  <i style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:300,marginTop:'520px',textAlign:'center'}}>Product Owner’ımız Bilal Murat Nazlı ve Agile Koç’umuz İpek Akyüz’e<br/>
                  destekleri için çok teşekkür ederiz.</i>

                  <Image style={{position:'absolute', left:30,top:800}}width={200} src="./logo1.png" />
                  <i style={{fontWeight:'bold',fontSize:'60px',top:850,position:'absolute', left:300,color:'#13C2C2'}}>CryptoBox</i>
                  <Image style={{position:'absolute', left:500,top:820}}width={350} src="https://www.intertech.com.tr/wp-content/uploads/2017/12/intertech_web_logo.png" />
                  <Avatar style={{position:'absolute', left:620, top:850,width:70,height:100}}  src= './x.png' />

                </Card.Grid>

                </Content>

                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                
                <circle style={{position:'absolute', right:300, top:1400,  display:'flex', width: '800px',
                 height:'800px', backgroundColor:'#87E8DE', borderRadius:'1400%',borderColor:'orange'}} />
                 
                <circle style={{position:'absolute', left:400, top:1400,  display:'flex', width: '800px',
                 height:'800px', backgroundColor:'#87E8DE', borderRadius:'1400%',borderColor:'orange'}} />

                <i style={{fontWeight:'bold',fontSize:'60px',position:'absolute', right:520,top:1580,textAlign:'center',color:'#FA8C16'}}>Misyonumuz</i>
                <i style={{fontWeight:'bold',fontSize:'35px',position:'absolute', right:490,top:1700,textAlign:'center',color:'000000',}}>Kullanıcı dostu ve güvenilir<br/>
                ürünümüzle<br/>
                ailelerin çocukları için<br/>
                birikim yapmalarına <br/>
                destek olmak.
                </i>

                <i style={{fontWeight:'bold',fontSize:'60px',position:'absolute', left:640,top:1580,textAlign:'center',color:'#FA8C16'}}>Vizyonumuz</i>
                <i style={{fontWeight:'bold',fontSize:'35px',position:'absolute', left:540,top:1700,textAlign:'center',color:'000000',}}>Aileler için<br/>
                Ethereum kripto para birimiyle<br/>
                ürünler içerisinde <br/>
                birikim yapmalarına <br/>
                1 Numara olmak!
                </i>



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
export default About; 