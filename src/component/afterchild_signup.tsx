import { Layout, Avatar, Menu, MenuProps, Card } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import  { BellOutlined, ExportOutlined, SearchOutlined,  SendOutlined,  TeamOutlined,  VerticalAlignBottomOutlined,  VerticalAlignTopOutlined,  WalletOutlined } from '@ant-design/icons';
import { WalletService } from '../services/wallet-service';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';

const { Header, Footer, Sider, Content } = Layout;





function AfterSignupChild() {
    
      window.scrollTo(0, 0)


      const [kullanıcıName, setName] = useState("");
      const [miktar, setMiktar] = useState("");
      const [time, setTime] = useState(new Date);

      useEffect(() => {
        WalletService.connect().then(() => {
          WalletService.contract.getRole().then(async(role: string) => {
            
            if (role == 'Unregistered') {
              console.log('kayıtlıdegil')
            }else if (role == 'Parent'){
                console.log('kayıtlıdegil')
            }
            else if (role == 'Child'){
                const child = await WalletService.contract.getChild();
                setName(child.name);
                const ethValue = ethers.utils.formatEther(child.amount.toString());
                setMiktar(ethValue);

                // console.log(child.releaseTime.toString())
                
                // var myDate = new Date(child.releaseTime*1000);
                // console.log(myDate.toLocaleString());
           


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
        getItem(<Link to="/cocuklarim"><h2 style={{fontSize:'30px',color:'black',textAlign:'center',marginTop:'6px'}}>{ML("COCUKLARIM")}</h2></Link>, '2', <TeamOutlined style={{position:'absolute',marginTop:'6px',fontSize:'35px'}}/>),
        getItem(<h2 style={{fontSize:'30px',color:'black',textAlign:'center',marginTop:'6px'}}>{ML("CIKIS_YAP")}</h2>, '3', <ExportOutlined style={{position:'absolute',marginTop:'6px',fontSize:'35px'}}/>),
        

      ];


        return(
        <div>

            <Layout>
              <Header style={{background:"white", padding:50,position:'sticky', top:0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>

                <Link to="/"><Image style={{position:'absolute', left:30,top:-65}}width={100} src="./logo1.png" /></Link>
               
                <Button style={{position:'absolute', left:190, top:15, color:'#13C2C2',fontWeight:'bold',fontSize:'35px'}}
                
                type="link" danger><Link to="/">CryptoBox</Link></Button>

                 <Button
                    style={{
                      position: "absolute",
                      right: 180,
                      top: 25,
                      width: "170px",
                      height: "50px",
                      borderColor: "#13C2C2",
                      borderWidth: "5px",
                      color: "#13C2C2",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                    type="primary"
                    ghost
                  >
                  <Link to="/login">{ML("OTURUM_DEGISTIRME")}</Link>
                </Button>

                <LanguageComponent/>

              </Header>            
                  <Layout>



              <Content style={{background:"white", 
                padding:580, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <h2 style={{fontWeight:'bold', position:'absolute', left:1020,top:130,color:'#13C2C2',fontSize:'35px'}}>{ML("HOS_GELDIN")}</h2>
                <h2 style={{position:'absolute', left:1260,top:130,fontWeight:'bold',color:'#13C2C2',fontSize:'35px'}}>{kullanıcıName}!</h2>
               
                
                
                <h2 style={{fontWeight:'bold', position:'absolute', left:750,top:250,color:'#13C2C2',fontSize:'35px',textAlign:'center'}}>{ML("TARIHINDEN_ITIBAREN_ISLEM_YAPMAYA")}<br/>
                {ML("BASLAYABILIRSIN")}
                </h2>
                
                <h2 style={{fontWeight:'bold', position:'absolute', left:1170,top:480,color:'black',fontSize:'55px'}}>{miktar} ETH</h2>
                <Avatar style={{position:'absolute', left:950, top:400,width:'136px',height:'252px'}} src= './ether1.png' />

                <Link to='/paracekme_cocuk'><h2 style={{position:'absolute', left:1200,top:700,color:'black',fontSize:'25px'}}>{ML("PARA_CEK")}</h2></Link>
                <Link to='/paracekme_cocuk'><VerticalAlignTopOutlined style={{position:'absolute',left:1230,top:650,color:'black',fontSize:'50px'}} /></Link>

                
                <h2 style={{fontWeight:'bold',position:'absolute', left:850,top:798,color:'#434343',fontSize:'30px'}}>{ML("HESAP_HAREKETLERI")}</h2>

                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:868,backgroundColor:'#13C2C2'}}></Card.Grid>
                <Card.Grid style={{width:'900px', height:'100px',position:'absolute', left:800, top:967,backgroundColor:'#13C2C2'}}></Card.Grid>
                
               </Content>
               </Layout>
               <Footer style={{background:"white", padding:60,boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)'}}>
                  <h2 style={{position:'absolute', right:1000,top:1300}}>{ML("2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR")}</h2>
                </Footer> 
                
            </Layout>
        </div>

        )
        
    

}
export default AfterSignupChild; 

