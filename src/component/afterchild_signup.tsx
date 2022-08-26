import { Layout, Avatar, Menu, MenuProps, Card } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import  { BellOutlined, ExportOutlined, SearchOutlined,  SendOutlined,  TeamOutlined,  VerticalAlignBottomOutlined,  VerticalAlignTopOutlined,  WalletOutlined } from '@ant-design/icons';
import { WalletService } from '../services/wallet-service';
import { useEffect, useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;





function AfterSignupChild() {
    
      window.scrollTo(0, 0)


      const [kullanıcıName, setName] = useState("");


     

      
      useEffect(() => {
        WalletService.connect().then(() => {
          WalletService.contract.getRole().then(async(role: string) => {
            
            if (role == 'Unregistered') {
              // setTimeout(() => {console.log("this is the first message")}, 10000);
              console.log('kayıtlıdegil')
 
            }else if (role == 'Parent'){
                console.log('kayıtlıdegil')


            }
            else if (role == 'Child'){
                const child = await WalletService.contract.getChild();
                setName(child.name);
                console.log(child.name)
  
              }
            
          })
    
        })
      }, []);
        
      
      
      
      
      
      
      
      type MenuItem = Required<MenuProps>['items'][number];
        function getItem(
          label: React.ReactNode,
          key: React.Key,
          icon?: React.ReactNode,
          children?: MenuItem[],
          type?: 'group',
        ): MenuItem {
          return {
            key,
            icon,
            children,
            label,
            type,
          } as MenuItem;
        }




      const items: MenuItem[] = [
        getItem(<Link to="/after_signup"><h2 style={{fontSize:'30px',color:'black',textAlign:'center',marginTop:'6px'}}>My CrytoBox</h2></Link>, '1', <WalletOutlined style={{position:'absolute',marginTop:'6px',fontSize:'35px'}} />),
        getItem(<Link to="/cocuklarim"><h2 style={{fontSize:'30px',color:'black',textAlign:'center',marginTop:'6px'}}>Çocuklarım</h2></Link>, '2', <TeamOutlined style={{position:'absolute',marginTop:'6px',fontSize:'35px'}}/>),
        getItem(<h2 style={{fontSize:'30px',color:'black',textAlign:'center',marginTop:'6px'}}>Çıkış Yap</h2>, '3', <ExportOutlined style={{position:'absolute',marginTop:'6px',fontSize:'35px'}}/>),
        

      ];


        return(
        <div>

            <Layout>
              <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                <Avatar style={{position:'absolute', right:100, top:35,}} src= './coin2.png' />

                <Link to="/"><Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" /></Link>
               
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

                <SearchOutlined style={{position:'absolute',right:350,top:40,color:'#13C2C2',fontSize:'30px'}}/>
                <BellOutlined style={{position:'absolute',right:300,top:40,color:'#13C2C2',borderBlockColor:'#13C2C2' ,fontSize:'30px'}}/>
                <TeamOutlined style={{position:'absolute',right:250,top:40,color:'#13C2C2',borderBlockColor:'#13C2C2' ,fontSize:'30px'}}/>


              </Header>            
                  <Layout>



              <Content style={{background:"white", 
                padding:580, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{fontWeight:'bold', position:'absolute', left:1100,top:130,color:'#13C2C2',fontSize:'35px'}}>HOŞ GELDİN</h2>
                <h2 style={{position:'absolute', left:670,top:130,fontWeight:'bold',color:'#13C2C2',fontSize:'35px'}}>{kullanıcıName}</h2>
                <br/>
                <h2 style={{fontWeight:'bold', position:'absolute', left:750,top:200,color:'#13C2C2',fontSize:'35px'}}>..... tarihinden itibaren hesabından işlem yapmaya başlayabillirsin</h2>
                <h2 style={{fontWeight:'bold', position:'absolute', left:1300,top:370,color:'black',fontSize:'35px'}}>... ETH</h2>
                <Avatar style={{position:'absolute', left:1000, top:350,width:'100px',height:'100px'}} src= './coin2.png' />

                <Link to='/paracekme_cocuk'><h2 style={{position:'absolute', left:1250,top:550,color:'#13C2C2',fontSize:'20px'}}>Para Çekme</h2></Link>
                <Link to='/paracekme_cocuk'><VerticalAlignTopOutlined style={{position:'absolute',left:1280,top:500,color:'#13C2C2',fontSize:'45px'}} /></Link>

                
                <h2 style={{fontWeight:'bold',position:'absolute', left:850,top:550,color:'#434343',fontSize:'30px'}}>Hesap Hareketleri</h2>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:620,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:719,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:818,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:917,backgroundColor:'#13C2C2'}}></Card.Grid>
                
               </Content>
               </Layout>
               <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,top:1300}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>
                </Footer> 
                
            </Layout>
        </div>

        )
        
    

}
export default AfterSignupChild; 

