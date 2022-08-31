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
      message: ML("BILGILENDIRME_MESAJI"),
      description:
      ML("METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN"),
      placement,
    });
  };




  const Başarısız = (type: NotificationType) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("LUTFEN_BILGILERI_ISTENILEN_GIBI_DOLDURUN"),
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
    setTimeout(() => {navigate("/after_signup_parent")}, 10000);
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

            <Link to="/after_signup_parent">
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
                  label={ML("TUTAR")}
                  name="TUTAR"
                  rules={[
                    { required: true, message: ML("BU_KISIM_BOS_BIRAKILAMAZ")  },
                  ]}
                >
                  <Input
                    onChange={handlechangeAmount}
                    style={{ width: "350px", height: "40px" }}
                    placeholder={ML("TUTAR") }
                  />
                </Form.Item>
                <Form.Item                  
                label= {ML("METAMASK_ADRESI")}
                name="Alıcı Adresi"
                rules={[
                  { required: true, message: ML("BU_KISIM_BOS_BIRAKILAMAZ") },
                ]}

                >
                <Input
                    onChange={handlechangeRecievingChild}
                    style={{ width: "350px", height: "40px" }}
                    placeholder={ML("METAMASK_ADRESI") }
                  /></Form.Item>

                <Form.Item                  
                label={ML("BILGILENDIRME")}
                name="Bilgirendirme"
                >
                <Input
                    onChange={handlechangeExplanation}
                    style={{ width: "350px", height: "40px" }}
                    placeholder={ML("ISTEGE_BAGLI") }
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