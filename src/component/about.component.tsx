import React, {Component} from 'react';
import { Card, Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;





class About extends Component {
    render() {
      window.scrollTo(0, 0)
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
                
                type="primary" ghost><Link to="/signin">{ML("OTURUM_AC")}</Link></Button>
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
                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:650, top:200,backgroundColor:'#E6FFFB'}}>
                <h1 style={{fontWeight:'bold',fontSize:'35px',position:'absolute', left:520,marginTop:'30px',textAlign:'center',color:'#434343'}}>{ML("BIZ_KIMIZ")}</h1>
                <h1 style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:330,marginTop:'100px',textAlign:'center'}}>{ML("BIZ_INTERTECH_SIRKETINDE_2022_YILI_AGUSTOS_DONEMI_STAJYERLERINDEN")}</h1>
                <h1 style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:430,marginTop:'130px',textAlign:'center'}}>{ML("TAKIM_2YIZ_VE_SIZINLE_DE_AYNI_TAKIMDAYIZ")}</h1>
                <h1 style={{fontWeight:'bold',fontSize:'20px',position:'absolute', left:540,marginTop:'170px',color:'#434343'}}>{ML("TAKIM_UYELERI")}</h1>
                <h1 style={{fontWeight:'bold',fontSize:'20px',position:'absolute', left:500,marginTop:'210px',textAlign:'center'}}>
                  Anıl Çetin<br/>
                  Çağdaş Çapuk<br/>
                  Elif Ezgi İzgin<br/>
                  Emine Çiğ<br/>
                  Hasan Yiğit Kaya<br/>
                  Irmak Özügüzel<br/>
                  Mustafa Sergen Haysal<br/>
                  Sezgin Kale<br/>
                  Zeynep Özer
                  </h1>
                  <h1 style={{fontWeight:'regular',fontSize:'20px',position:'absolute', left:300,marginTop:'520px',textAlign:'center'}}>{ML("PRODUCT_OWNERIMIZ_BILAL_MURAT_NAZLI_VE_AGILE_KOCUMUZ_IPEK_AKYUZE")}<br/>
                  {ML("DESTEKLERI_ICIN_COK_TESEKKUR_EDERIZ")}</h1>

                  <Image style={{position:'absolute', left:30,top:800}}width={200} src="./logo1.png" />
                  <h1 style={{fontWeight:'bold',fontSize:'60px',top:850,position:'absolute', left:300,color:'#13C2C2'}}>CryptoBox</h1>
                  <Image style={{position:'absolute', left:500,top:820}}width={350} src="https://www.intertech.com.tr/wp-content/uploads/2017/12/intertech_web_logo.png" />
                  <Avatar style={{position:'absolute', left:620, top:850,width:70,height:100}}  src= './x.png' />

                </Card.Grid>

                </Content>

                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                

                 <Avatar style={{position:'absolute', right:300, top:1400,width:800,height:800}}  src= './circle1.png' />
                 
                 <Avatar style={{position:'absolute', left:400, top:1400,width:800,height:800}}  src= './circle1.png' />

                <h1 style={{fontWeight:'bold',fontSize:'60px',position:'absolute', right:520,top:1580,textAlign:'center',color:'#FA8C16'}}>{ML("MISYONUMUZ")}</h1>
                <h1 style={{fontWeight:'bold',fontSize:'35px',position:'absolute', right:490,top:1700,textAlign:'center',color:'000000',}}>{ML("KULLANICI_DOSTU_VE_GUVENILIR")}<br/>
                {ML("URUNUMUZLE")}<br />
                {ML("AILELERIN_COCUKLARI_ICIN")}<br />
                {ML("BIRIKIM_YAPMALARINA")} <br />
                {ML("DESTEK_OLMAK")}
                </h1>

                <h1 style={{fontWeight:'bold',fontSize:'60px',position:'absolute', left:640,top:1580,textAlign:'center',color:'#FA8C16'}}>{ML("VIZYONUMUZ")}</h1>
                <h1 style={{fontWeight:'bold',fontSize:'35px',position:'absolute', left:540,top:1700,textAlign:'center',color:'000000',}}>{ML("AILELER_ICIN")}<br/>
                {ML("ETHEREUM_KRIPTO_PARA_BIRIMIYLE")}<br />
                {ML("CUZDAN_HIZMETI_VEREN")} <br />
                {ML("URUNLER_ICERISINDE")} <br />
                {ML("1_NUMARA_OLMAK")}
                </h1>



                </Content>


            
                <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,}}> {ML("2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR")}</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    }

}
export default About; 