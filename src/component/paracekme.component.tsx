import React, { Component, useEffect, useState } from 'react';
import { Card, Form, Input, Spin } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';
import notification, { NotificationPlacement } from 'antd/lib/notification';
import { TeamOutlined } from '@ant-design/icons';





const { Header, Footer, Content } = Layout;


export default function Paracekme() {

  type NotificationType = "info"| 'warning';

  const Başarılı = (type: NotificationType, placement: NotificationPlacement) => {
    notification.info({
      message: `Bilgilendirme Mesajı `,
      description:
      "Çoçuğunuzun hesabından para çekilmesi için MetaMask'tan ücreti onaylayın lütfen.",
      placement,
    });
  };




  const Başarısız = (type: NotificationType) => {
    notification[type]({
      message: "Bilgilendirme Mesajı ",
      description: "Lütfen Bilgileri İstenilen gibi doldurdun",
    });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then((role: string) => {
        if (role == "Unregistered" || role== 'Child') {
          
        } else if (role == "Parent") {
          setLoading(false);
        }
      });
    });
  }, []);



  window.scrollTo(0, 0)


  const withdrawParentFunction = async () => {
    try {
      console.log("withdrawParentFunction")

      await WalletService.connect().then(async (result) => {
        console.log(pullmoneyFrom,pullmoney)

        const response = await WalletService.contract.withdrawParent(pullmoneyFrom, pullmoney); 
        console.log(response)
        const hesap = await WalletService.contract.getAmount(pullmoneyFrom);
        console.log(hesap.toString())

      });
    }
    catch (error) {
      console.log(error)
    }

  };

  const navigate = useNavigate();

  const [pullmoney, setPullMoney] = useState("");
  const [pullmoneyFrom, setPullMoneyFrom] = useState("");


  const handlechangePullMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPullMoney(event.target.value);

  }
  const handlechangePullMoneyFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPullMoneyFrom(event.target.value);

  }
  const onFinish = (values: any) => {
    withdrawParentFunction()
    Başarılı('info','bottom');
    setTimeout(() => {navigate("/after_signup")}, 10000);
  };

  const onFinishFailed = (errorInfo: any) => {
    Başarısız("warning");
  };



  return (

    <div>
      <Layout>
        <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
          <Avatar style={{ position: 'absolute', right: 100, top: 35, }} src='./coin2.png' />

          <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

          <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

            type="link" danger><Link to="/">CryptoBox</Link></Button>
            
          <Link to="/after_signup">
          <TeamOutlined
            style={{
              position: "absolute",
              right: 250,
              top: 40,
              color: "#13C2C2",
              borderBlockColor: "#13C2C2",
              fontSize: "30px",
            }}
          />
          </Link>
        </Header>
        <Layout>
          <Content style={{
            background: 'white',
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <h1
            style={{
              position: "absolute",
              left: 770,
              top: 180,
              color: '#13C2C2',
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >Çocuğunuzun Hesabından Para Çekme</h1>
            <Card.Grid style={{ width: '1200px', height: '750px', position: 'absolute', left: 570, top: 265, backgroundColor: '#E6FFFB' }}>
            <Spin
              spinning={loading}
              tip={
                <h2 style={{ color: "blue" }}>
                  Lütfen MetaMask hesabına bağlanın
                </h2>
              }>

              <h1 style={{position: "absolute",marginLeft: '765px',marginTop: '4px',color: '#13C2C2',fontSize: "20px",fontWeight: "bold",}} >ETH</h1>

              <Form
                style={{ marginTop: "240px", marginLeft: "200px" }}
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 9 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Tutar"
                  name="TUTAR"
                  rules={[
                    { required: true, message: "Bu kısım boş bırakılamaz" },
                  ]}
                >
                  <Input
                    onChange={handlechangePullMoney}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="Göndereceğiniz Ether Tutarını Girin"
                  />
                </Form.Item>
                <Form.Item                  
                label= ' MetaMask Adresi'
                name="Alıcı Adresi"
                rules={[
                  { required: true, message: "Bu kısım boş bırakılamaz" },
                ]}

                >
                <Input
                    onChange={handlechangePullMoneyFrom}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="MetaMask Adresini Giriniz"
                  /></Form.Item>

 

                <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
                  <Button
                    style={{width: '120px', height: '40px',background: "#13C2C2", borderColor: "#13C2C2" }}
                    type="primary"
                    htmlType="submit"
                    >
                    Ethereum Çek
                  </Button>
                </Form.Item>
              </Form>
              </Spin>
              </Card.Grid>

          </Content>

          <Footer style={{ background: "white", padding: 60, }}>
            <h2 style={{ position: 'absolute', right: 1000, }}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
          </Footer>
        </Layout>
      </Layout>
    </div>

  )



}