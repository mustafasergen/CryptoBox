import React, { Component, useEffect, useState } from 'react';
import { Card, DatePicker, Form, Input, notification, Spin } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';
import { NotificationPlacement } from 'antd/lib/notification';
import { TeamOutlined } from '@ant-design/icons';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';




const { Header, Footer, Content } = Layout;





export default function ParaGonderme() {


  
  type NotificationType = "info"| 'warning';

  const Başarılı = (type: NotificationType, placement: NotificationPlacement) => {
    notification.info({
      message: `Bilgilendirme Mesajı `,
      description:
      "Çoçuğunuz para gönderilmesi için MetaMask'tan ücreti onaylayın lütfen.",
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

  const fundFunction = async () => {
    try {
      console.log("fundFunction")
      console.log(amount)
      console.log(recievingchild)
      console.log(explanation)
      await WalletService.connect().then(async (result) => {
        const response = await WalletService.contract.fund(recievingchild, amount);
        console.log(amount)
        const hesap = await WalletService.contract.getAmount(recievingchild);
        console.log("bebe amount : "+hesap.toString())
        console.log("Para Gönderildi")

      });
    }
    catch (error) {

    }

  };
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [recievingchild, setRecievingChild] = useState("");
  const [explanation, setExplanation] = useState("");

  const handlechangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);

  }
  const handlechangeRecievingChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecievingChild(event.target.value);

  }
  const handlechangeExplanation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExplanation(event.target.value);

  }

  const onFinish = (values: any) => {
    fundFunction()
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
          <LanguageComponent/>
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
              left: 800,
              top: 180,
              color: '#13C2C2',
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >{ML("PARA_GONDERME")}</h1>
            <Card.Grid style={{ width: '1200px', height: '750px', position: 'absolute', left: 570, top: 265, backgroundColor: '#E6FFFB' }}>
            <Spin
              spinning={loading}
              tip={
                <h2 style={{ color: "blue" }}>
                  {ML("LUTFEN_METAMASK_HESABINA_BAGLANIN")}
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
                    onChange={handlechangeAmount}
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
                    onChange={handlechangeRecievingChild}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="MetaMask Adresini Giriniz"
                  /></Form.Item>

                <Form.Item                  
                label='Bilgilendirme'
                name="Bilgirendirme"
                >
                <Input
                    onChange={handlechangeExplanation}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="İsteğe bağlı Açıklama ekleyiniz"
                  /></Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
                  <Button
                    style={{width: '100px', height: '40px',background: "#13C2C2", borderColor: "#13C2C2" }}
                    type="primary"
                    htmlType="submit"
                    >
                    {ML("GONDER")}
                  </Button>
                </Form.Item>
              </Form>
              </Spin>


            </Card.Grid>

          </Content>


        </Layout>
      </Layout>
    </div>

  )



}