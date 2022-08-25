import React, { useEffect, useState} from 'react';
import { Card, Form, Input, notification, Spin} from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';

import { WalletService } from '../services/wallet-service';


const { Header, Footer, Content } = Layout;




export default function NewLogin () {
    

    window.scrollTo(0, 0)
    
    type NotificationType = 'info';
    const openNotificationWithIcon = (type: NotificationType) => {
        notification[type]({
          message: 'Notification Title',
          description:
            'Kayıt olunuz',
        });
      };

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      WalletService.connect().then(() => {
        WalletService.contract.getRole().then((role: string) => {
            setLoading(false);
          if (role == 'Unregistered') {
            openNotificationWithIcon('info');
            
          } else if (role == 'Parent'){ 
            navigate("/login");}
             
        })
  
      })
    }, []);
  
  
  
  
    const [yenikullanıcı, setName] = useState("");

  
    const handlechangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
  
    }

  
  
  
    const addParentFunction = async () => {
      try {
        await WalletService.connect().then(async (result) => {
          const response = await  WalletService.contract.addParent(yenikullanıcı);
          console.log('yeni kullanıcı')
  
          // const parent = await WalletService.contract.getParent();
          // console.log(parent)
        });
      }
      catch (error) {
       
      }
  
    };
  
        const onFinish = (values: any) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo: any) => {
          openNotificationWithIcon('info');
        };
        return(
        
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
                
                type="primary"><Link to="/yenideneme">Kayıt ol</Link></Button>
                </Header>
                 <Layout>
                <Content style={{backgroundImage: "url(" + "./blur.png" + ")",
                padding:600, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

   
                <h1 style={{ position: 'absolute', left: 800, top: 180, color: 'black', fontSize: '50px', fontWeight: 'bold' }}>CryptoBox Hesabınızı Oluşturun</h1>
                
                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#E6FFFB'}}>
                <Spin spinning={loading} tip={<h2 style={{color:'blue'}}>Lütfen MetaMask hesabına bağlanın</h2>} size="large">
                
                    <Form
                    style={{marginTop:'260px',marginLeft:'200px'}}
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 9 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    ><Form.Item

                    
                    label="Ad"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={handlechangeName} style={{width: '350px', height: '40px' }} placeholder="İsim Giriniz" />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button  onClick={() => {addParentFunction()}}  style={{background:'#13C2C2',borderColor:'#13C2C2'}} type="primary" htmlType="submit">
                    Giriş
                    </Button>
                </Form.Item>
                </Form>

                {yenikullanıcı}
                
               

                </Spin>
                </Card.Grid>

                </Content>

                <Footer style={{background:"white", padding:60,}}>
                  <h2 style={{position:'absolute', right:1000,}}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
                  </Footer>
              </Layout>
            </Layout>
        

        )
        
    

}
