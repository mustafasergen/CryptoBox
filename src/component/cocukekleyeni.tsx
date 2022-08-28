import React, { useEffect, useState } from 'react';
import { Card, DatePicker, DatePickerProps, Form, Input, notification, Spin } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';
import { NotificationPlacement } from 'antd/lib/notification';
import { TeamOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

export default function CocukEkleYeni() {



    type NotificationType = "info"| 'warning';

    const Başarılı = (type: NotificationType, placement: NotificationPlacement) => {
      notification.info({
        message: `Bilgilendirme Mesajı `,
        description:
        "Çoçuğunuzun eklenmesi için MetaMask'tan ücreti onaylayın lütfen.",
        placement,
      });
    };




    const Başarısız = (type: NotificationType) => {
      notification[type]({
        message: "Bilgilendirme Mesajı",
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

  const addChildrendFunction = async () => {
    try {

      await WalletService.connect().then(async (result) => {
        const response = await WalletService.contract.addChild(childmetamask, childbday, childname);
        console.log('Çocuk Eklendi')
        // const parent = await WalletService.contract.getParent();
        // console.log(parent)
      });
    }
    catch (error) {
      console.log(error)
    }

  };


  const navigate = useNavigate();

  const [childname, setChildName] = useState("");
  const [childbday, setChildBday] = useState(0);
  const [childmetamask, setChildMetaMask] = useState("");

  const handlechangeChildName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildName(event.target.value);

  }

  const handlechangeChildMetamask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildMetaMask(event.target.value);

  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    const dates = new Date(dateString).getTime()
    console.log(dates)
    setChildBday(dates);
  };

  const onFinish = (values: any) => {
    addChildrendFunction()
    Başarılı('info','bottom');
    setTimeout(() => {navigate("/cocuklarim")}, 10000);
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
            background: "white",
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <h1
            style={{
              position: "absolute",
              left: 920,
              top: 180,
              color: '#13C2C2',
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >Çoçuğunuzu Ekleyin</h1>
          <Card.Grid
            style={{
              width: "1200px",
              height: "750px",
              position: "absolute",
              left: 570,
              top: 265,
              backgroundColor: "#E6FFFB",
            }}
          >
              <Spin
              spinning={loading}
              tip={
                <h2 style={{ color: "blue" }}>
                  Lütfen MetaMask hesabına bağlanın
                </h2>
              }>

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
                  label="Ad ve Soyad"
                  name="username"
                  rules={[
                    { required: true, message: "Bu kısım boş bırakılamaz" },
                  ]}
                >
                  <Input
                    onChange={handlechangeChildName}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="İsim ve Soyisim Giriniz"
                  />
                </Form.Item>
                <Form.Item                  
                label='MetaMask Adresi'
                name="MetaMask Adresi"
                rules={[
                  { required: true, message: "Bu kısım boş bırakılamaz" },
                ]}

                >
                <Input
                    onChange={handlechangeChildMetamask}
                    style={{ width: "350px", height: "40px" }}
                    placeholder="MetaMask Adresini Giriniz"
                  /></Form.Item>

                   <Form.Item
                   label='Çoçuğunuzun Doğum Tarihi'>
                   <DatePicker 
                   style={{ width: '500px', height: '40px' }} onChange={onChange} placeholder="Çocuğunuzun Doğum Tarihi" />
                   </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
                  <Button
                    style={{width: '100px', height: '40px',background: "#13C2C2", borderColor: "#13C2C2" }}
                    type="primary"
                    htmlType="submit"
                    >
                    Çoçuk Ekle
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


