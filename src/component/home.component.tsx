import React, {Component} from 'react';

import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';



const { Header, Footer, Content } = Layout;



class Hakkımda extends Component {
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
                
                <Content style={{background:"white", 
                padding:590, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <h2 style={{position:'absolute', left:150,color:"#434343",top:280,fontWeight:'bold',fontSize:'40px',fontFamily:'Verdana'}}>YATIRIMINIZ<br/>
                ÇOCUĞUNUZLA BERABER BÜYÜSÜN!
                </h2>
                <h2 style={{position:'absolute', left:150,color:"#434343",top:420,fontSize:'25px',fontWeight:'Regular',fontFamily:'Verdana'}}>Bebeğinizin size doğru attığı ilk adımlar gibi siz de onun <br/>
                geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için<br/>
                açacağınız hesapla onun için kripto para biriktirebilirsiniz.<br/><br/>
                Eğer
                </h2>

                <h2 style={{position:'absolute', left:200,color:"#434343",top:700,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}>MetaMask hesabınız varsa</h2>
                <h2 style={{position:'absolute', left:200,color:"#434343",top:850,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}>Ethereum Networkünde ise</h2>
                <h2 style={{position:'absolute', left:200,color:"#434343",top:1000,fontSize:'30px',fontWeight:'Regular',fontFamily:'Verdana'}}>Bir miktar Ethereum’unuz varsa</h2>

                <Avatar style={{position:'absolute', left:1400, top:200,width:'850px', height:'850px'}} src= './circle1.png' />
                <Image style={{position:'absolute', left:800,top:-500}}width={500} src="./anne1.png" />
                <Image style={{position:'absolute', left:700,top:-150}}width={500} src="./anne2.png" />
                

                

                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:680,fontSize:'90px'}} />
                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:830,fontSize:'90px'}} />
                <CheckCircleOutlined style={{position:'absolute', left:80,color:"#87E8DE",top:980,fontSize:'90px'}} />


                <Link to="/yenideneme"><Button style={{position:'absolute', left:270, top:1100, width:'280', height:'80px', color:'white',fontWeight:'bold',fontSize:'30px', backgroundColor:'#13C2C2', borderColor:'#13C2C2' }} 
                
                type="primary">Hemen Başlayın</Button></Link>
                
                </Content>

                <Content style={{background:"white", 
                padding:700, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                
                <h2 style={{position:'absolute', left:790,color:"orange",top:1310,fontWeight:'bold',fontSize:'43px',fontFamily:'Verdana', textAlign:'center',zIndex:1}}>ÇOCUĞUNUZUN GELECEĞİ İÇİN<br/> ŞİMDİ YATIRIM YAPIN</h2><br/>
                <Image style={{position:'absolute', left:-120,top:-590,zIndex:0}}width={1200} src="./bilgisayar1.png" />
                
                
                <CheckCircleOutlined style={{position:'absolute', left:910,color:"#87E8DE",top:2400,fontSize:'70px'}} />
                <br/>
                <h2 style={{position:'absolute', left:1000,color:"#434343",top:2400,fontWeight:'bold',fontSize:'40px',fontFamily:'Verdana',zIndex:1}}>Hesap Oluşturun</h2><br/>
                <h2 style={{position:'absolute', left:850,color:"#434343",top:2480,fontSize:'25px',fontFamily:'Verdana',zIndex:1}}>Web sitemizden saniyeler içinde hesabını oluştur</h2>

                </Content>
                <Content style={{background:"white", 
                padding:700, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <Image style={{position:'absolute', left:-120,top:-960,zIndex:0}}width={1200} src="./bilgisayar2.png" />
                
                <CheckCircleOutlined style={{position:'absolute', left:800,color:"#87E8DE",top:3550,fontSize:'70px'}} />
                <br/>
                <h2 style={{position:'absolute', left:900,color:"#434343",top:3550,fontWeight:'bold',fontSize:'40px',fontFamily:'Verdana'}}>Yatırım Yapmaya Başlayın</h2><br/>
                <h2 style={{position:'absolute', left:730,color:"#434343",top:3630,fontSize:'25px',fontFamily:'Verdana', textAlign:'center',zIndex:1}}>En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz 
                <br/>size kazandırmaya başlasın.</h2>

                </Content>
                <Content style={{background:"white", 
                padding:700, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <Image style={{position:'absolute', left:-120,top:-1200,zIndex:0}}width={1200} src="./bilgisayar3.png" />
                
                <CheckCircleOutlined style={{position:'absolute', left:900,color:"#87E8DE",top:4730,fontSize:'70px'}} />
                <br/>
                <h2 style={{position:'absolute', left:1000,color:"#434343",top:4730,fontWeight:'bold',fontSize:'40px',fontFamily:'Verdana'}}>Birikiminiz Büyüsün</h2><br/>
                <h2 style={{position:'absolute', left:740,color:"#434343",top:4810,fontSize:'25px',fontFamily:'Verdana', textAlign:'center'}}>Aileler için birikim yapmayı kolay ve eğlenceli hale getiren CryptoBox ile<br/>  
                çocuğunuz için birikim yapın.</h2>
                </Content>
                <Content style={{background:"white", 
                padding:200, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{position:'absolute', left:950,color:"orange",top:5050,fontWeight:'bold',fontSize:'43px',fontFamily:'Verdana', textAlign:'center',zIndex:1}}>NEDEN CRYPTOBOX?</h2><br/>
                
                
                <h2 style={{position:'absolute', left:350,top:5200,fontFamily:'Verdana',textAlign:'center'}}>
                <p style={{fontWeight:'Bold',fontSize:'39px',color:'#13C2C2'}}>Finansal Güçlendirme</p>
                <p style={{fontWeight:'Regular',fontSize:'33px',color:'#434343'}}>CryptoBox, ailelerin ve çocukların çeşitli<br/>
                  açılardan finansal olarak güçlenmesine katkı<br/>
                  sağlar. Bir yatırım aracı olan  CryptoBox<br/>
                  sayesinde aileler finansal bilgilerini<br/>
                  kullanarak kararlar alırlar ve çocuklarını<br/>
                  18 yaşında hesap sahibi olmaya hazırlarlar</p>
                 </h2>
                 <h2 style={{position:'absolute', left:350,top:5650,fontFamily:'Verdana',textAlign:'center'}}>
                <p style={{fontWeight:'Bold',fontSize:'39px',color:'#13C2C2'}}>Finansal Özgürlük</p>
                <p style={{fontWeight:'Regular',fontSize:'33px',color:'#434343'}}>Çocukların yatırımları olduğunu bilerek<br/>
                  büyümeleri onları bu birikimle neler <br/>
                  yapabilececekleri konusunda onları hayal <br/>
                  kurmaya teşvik eder. Bu birikimlerini eğitime, <br/>
                  ilk girişimlerine ya da dünyayı gezme <br/>
                  amaçlarıyla kullanabilme fırsatı verir. </p>
                 </h2>
                <Image style={{position:'absolute', right:-1400,top:-800,zIndex:0}}width={700} src="./kumbara1.png" />
                <Image style={{position:'absolute', right:-700,top:-300,zIndex:0}}width={700} src="./kumbara2.png" />
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
export default Hakkımda; 