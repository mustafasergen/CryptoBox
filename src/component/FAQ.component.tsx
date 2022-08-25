
import { Layout, Avatar, Switch } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import Tree, { DataNode } from 'antd/lib/tree';
import { useState } from 'react';


const { Header, Footer, Content } = Layout;




const treeData: DataNode[] = [
  {
  
    title: <h2 style={{color:'black',fontWeight:'bold',fontSize:'40px'}}>MetMask hesabım yok. Yine de CrytoBox'a kayıt olabilir miyim?</h2>,
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: <h2 style={{color:'black',textAlign:'center',fontSize:'25px'}}>Maalesef kayıt olmak için MetaMask hesabın olması gerekiyor. Detaylı bilgi<br/>
        ve indirme detayları için <Link style={{color:'orange'}} to='/metamask'>METAMASK NEDİR?</Link> sayfamıza göz atabilirsin.</h2>,
        key: '0-0-0',
        icon: <CarryOutOutlined />,

      },

    ],
  },
  {
    title: <h2 style={{color:'black',fontWeight:'bold',fontSize:'40px'}}>CryptoBox güvenilir bir uygulama mı?</h2>,
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: <h2 style={{color:'black',textAlign:'center',fontSize:'25px'}}>Ethereum en güvenli kripto para birimlerinden bir tanesidir. CryptoBox da 
        <br/>
        güvenilirliğini Ethereum’un akıllı kontrat ve güvenli finansal işlemleri destekelemesinden alır. </h2>,
        key: '0-1-0',
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: <h2 style={{color:'black',fontWeight:'bold',fontSize:'40px'}}>CryptoBox’a kimler üye olabilir?</h2>,
    key: '0-2',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: <h2 style={{color:'black',textAlign:'center',fontSize:'25px'}}>MetaMask hesabı Ethereum networkünde olan, hesabında Ethereum’u bulunan
        <br/>
        ve çocukları için kripto birikimi yapmak isteyen tüm ebeveynler üye olabilir. </h2>,
        key: '0-2-0',
        icon: <CarryOutOutlined />,
      },
    ],
  },
];



export default function FAQ () {
    



  const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean>(false);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const onSetLeafIcon = (checked: boolean) => {
    setShowLeafIcon(checked);
    setShowLine({ showLeafIcon: checked });
  };

  const onSetShowLine = (checked: boolean) => {
    setShowLine(checked ? { showLeafIcon } : false);
  };

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
                
                type="primary"><Link to="/yenideneme">Kayıt ol</Link></Button>
              </Header>
              <Layout>
              <Content style={{background: 'white',
                padding:400, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>


                    
              
                  
                  <h2 style={{position:'absolute', left:900, top:250,color:'#13C2C2',fontWeight:'bold',fontSize:'40px'}}>SIK SORULAN SORULAR</h2>
                  <Tree style={{position:'absolute', left:200, top:-100,width:'1500px',height:'400px'}}
                    showLine={showLine}
                    showIcon={showIcon}
                    defaultExpandedKeys={['0-0-0','0-1-0','0-2-0']}
                    
              
                    onSelect={onSelect}
                    treeData={treeData}
                  />
                  

     
     

                </Content>

                <Footer style={{background:"white", padding:60,}}>
                  <h2 style={{position:'absolute', right:1000,}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
                  </Footer>
              </Layout>
            </Layout>
        </div>

        )
        
    

}
