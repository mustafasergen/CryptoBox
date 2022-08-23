import { Card} from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';


const { Header, Footer, Content } = Layout;




export default function FAQ () {
    



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
              <Content style={{background: 'white',
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                >

                    
                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>

                <h1 style={{position:'absolute', left:520, marginTop:'30px',color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}>Sık Sorular</h1>
                <h1 style={{position:'absolute', left:300, marginTop:'100px',color:'black',fontWeight:'regular',fontSize:'20px',textAlign:'center'}}>
                MetaMask hesabım yok. Yine de CryptoBox'a kayıt olabilir miyim?</h1>
                <h1 style={{position:'absolute', left:250, marginTop:'150px',color:'black',fontWeight:'regular',fontSize:'20px',textAlign:'center'}}>
                Maalesef kayıt olmak için MetaMask hesabın olması gerekiyor. Detaylı bilgi ve <br/>
                indirme detayları için METAMASK NEDİR? sayfamıza göz atabilirsin.</h1>
                    
                


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
