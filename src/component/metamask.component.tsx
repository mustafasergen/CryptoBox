import React, {Component} from 'react';
import { Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';



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
                
                type="primary"><Link to="/signup">Kayıt ol</Link></Button>
              </Header>
              <Layout>
                
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>


                <h2 style={{fontWeight:'regular',fontSize:'25px',position:'absolute', left:280,top:200,textAlign:'center'}}>
                <p style={{fontWeight:'bold',fontSize:'55px',color:'#FA8C16'}} >MetaMask Nedir ?</p>
                <p style={{fontWeight:'bold',fontSize:'45px',color:'#434343',wordSpacing: 3}} ><br/>Ethereum Blockchain ile etkileşim<br/> kurmak için kullanılan bir Kripto<br/> Cüzdanıdır.</p>
                <p style={{fontWeight:'regular',fontSize:'36px',color:'#434343',wordSpacing: 3}} >Token satın alın, saklayın, gönderin ve<br/> değiştirin</p>
                <p style={{fontWeight:'regular',fontSize:'39px',color:'#000000',wordSpacing: 3}} > tarayıcı uzantısı ve bir mobil uygulama<br/>
                olarak mevcut olan MetaMask, size key<br/>
                vault, güvenli oturum açma, Token<br/> 
                cüzdanı ve Token takası ile dijital<br/>
                varlıklarınızı yönetmek için ihtiyacınız olan <br/>
                her şeyi sağlar. 
                </p></h2>

                <Image style={{position:'absolute', left:700,top:-300}}width={800} src="./örnek1.png" />

                </Content>
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{position:'absolute', left:150,top:1400,textAlign:'center'}}>
                <p style={{fontWeight:'bold',fontSize:'39px',color:'#434343'}}>Blockchain uygulamalarını keşfedin</p>
                <p style={{fontWeight:'regular',fontSize:'37px',color:'#000000',wordSpacing: 3}} >MetaMask, blok zinciri tabanlı<br/>
                uygulamalara bağlanmanın en basit ama<br/>
                en güvenli yolunu sağlar. Yeni merkezi<br/>
                olmayan web'de etkileşim kurarken<br/>
                kontrol her zaman sizdedir.</p>
                <p style={{fontWeight:'bold',fontSize:'36px',color:'#434343',wordSpacing: 3}} >Verilerinize sahip olun</p>
                <p style={{fontWeight:'regular',fontSize:'37px',color:'#000000',wordSpacing: 3}} >MetaMask, cihazınızda şifreler ve
                  anahtarlar oluşturur, böylece<br/>
                  hesaplarınıza ve verilerinize yalnızca siz<br/>
                  erişebilirsiniz. Neyi paylaşacağınızı ve<br/>
                  neyi gizli tutacağınızı her zaman siz<br/>
                  seçersiniz.</p></h2>
                  <Image style={{position:'absolute', left:800,top:-580}}width={600} src="./örnek2.png" />
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

                <Link to={{ pathname: "metamask.io/download/" }} target="_blank"> <h2 style={{position:'absolute', left:840,color:"#FA8C16",top:3000,fontWeight:'bold',fontSize:'35px',fontFamily:'Verdana'}}>
                  Hemen tarayıcın için MetaMask indir</h2> </Link>


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
export default MetaMask; 