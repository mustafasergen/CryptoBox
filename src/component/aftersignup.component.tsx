
import { Layout, Avatar, Menu, MenuProps, Card } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import  { BellOutlined, ExportOutlined, SearchOutlined,  SendOutlined,  TeamOutlined,  VerticalAlignBottomOutlined,  VerticalAlignTopOutlined,  WalletOutlined } from '@ant-design/icons';
import { WalletService } from '../services/wallet-service';
import { useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;





function AfterSignupParent() {
    
      window.scrollTo(0, 0)


      const [yenikullanıcı, setName] = useState("");
      const addParentName= async () => {
        try {
          await WalletService.connect().then(async (result) => {
            const parent = await WalletService.contract.getParent();
            
            console.log(parent)
    
        
          });
        }
        catch (error) {
         
        }
    
      };
        
      
      
      
      
      
      
      
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

                  <Sider style={{padding:200,backgroundColor:'#13C2C2'}}>

                    <Menu
                      style={{ position:'absolute',left:0,top:50,backgroundColor:'#13C2C2'}}
                      mode="inline"
                      theme="dark"
                      defaultSelectedKeys={['1']}
                      items={items}
                    />
                  </Sider>


              <Content style={{background:"white", 
                padding:580, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{fontWeight:'bold', position:'absolute', left:450,top:130,color:'#13C2C2',fontSize:'35px'}}>HOŞ GELDİN, ISIM!</h2>
                <Avatar style={{position:'absolute', left:1250, top:230,width:'100px',height:'100px'}} src= './coin2.png' />

                <Link to='/paragonderme'><h2 style={{position:'absolute', left:1400,top:450,color:'#13C2C2',fontSize:'20px'}}>Para Gönderme</h2></Link>
                <Link to='/paragonderme'><SendOutlined style={{position:'absolute',left:1450,top:400,color:'#13C2C2',fontSize:'45px'}} /></Link>

                <Link to='/paracekme'><h2 style={{position:'absolute', left:1250,top:450,color:'#13C2C2',fontSize:'20px'}}>Para Çekme</h2></Link>
                <Link to='/paracekme'><VerticalAlignTopOutlined style={{position:'absolute',left:1280,top:400,color:'#13C2C2',fontSize:'45px'}} /></Link>

                <Link to='/parayatirma'><h2 style={{position:'absolute', left:1070,top:450,color:'#13C2C2',fontSize:'20px'}}>Para Yatırma</h2></Link>
                <Link to='/parayatirma'><VerticalAlignBottomOutlined style={{position:'absolute',left:1100,top:400,color:'#13C2C2',fontSize:'45px'}} /></Link>


                <h2 style={{fontWeight:'bold',position:'absolute', left:850,top:550,color:'#434343',fontSize:'30px'}}>Hesap Hareketleri</h2>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:620,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:719,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:818,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:917,backgroundColor:'#13C2C2'}}></Card.Grid>
                <button  style={{position:'absolute', left:1400,top:500}} onClick={addParentName}>bas</button>
               </Content>
               </Layout>
               <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,top:1300}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>
                </Footer> 
                
            </Layout>
        </div>

        )
        
    

}
export default AfterSignupParent; 