import React, { useEffect, useState } from "react";
import { Card, Form, Input, notification, Skeleton, Spin } from "antd";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "antd";

import { WalletService } from "../services/wallet-service";
import { NotificationPlacement } from "antd/lib/notification";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";

const { Header, Footer, Content } = Layout;

export default function NewLogin() {
  window.scrollTo(0, 0);

  type NotificationType = "info" |'success'| 'warning'|'error';
  const Kayıtolunuz = (type: NotificationType) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("KAYIT_OL"),
    });
  };

  const KayıtBaşarılı = (type: NotificationType,placement: NotificationPlacement) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN"),
      placement,
    });
  };
  const Buton = (type: NotificationType) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("LUTFEN_BILGILERI_ISTENILEN_GIBI_DOLDURUN"),
    });
  };
  const Parent = (type: NotificationType,placement: NotificationPlacement) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("BU_ADRES_ILE_HESAP_VAR"),
      placement,
    });
  };



  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then((role: string) => {
        
        if (role == "Unregistered") {
          Kayıtolunuz("info");
          setLoading(false);
        } else if (role == "Parent" || role == 'Child') {
          
          Parent('warning','bottom')
          
          setTimeout(() => {navigate("/login")}, 5000);
        }
        
      });
    });
  }, []);

  const [yenikullanıcı, setName] = useState("");

  const handlechangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addParentFunction = async () => {
    try {
      await WalletService.connect().then(async (result) => {
        const response = await WalletService.contract.addParent(yenikullanıcı);
        console.log("yeni kullanıcı");

        // const parent = await WalletService.contract.getParent();
        // console.log(parent)
      });
    } catch (error) {}
  };

  const onFinish = (values: any) => {
    addParentFunction()
    KayıtBaşarılı("success",'bottom');
    setTimeout(() => {navigate("/login")}, 10000);
    
  };

  const onFinishFailed = (errorInfo: any) => {
    Buton("error");
  };
  return (
    
    <Layout>
      <Header
        style={{
          background: "white",
          padding: 50,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.7)",
        }}
      >


        <Link to="/">
          <Image
            style={{ position: "absolute", left: 30, top: -65 }}
            width={100}
            src="./logo1.png"
          />
        </Link>

        <Button
          style={{
            position: "absolute",
            left: 190,
            top: 15,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "35px",
          }}
          type="link"
          danger
        >
          <Link to="/">CryptoBox</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 530,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/meta_mask">{ML("METAMASK_NEDIR")}</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 780,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/about">{ML("HAKKIMIZDA")}</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 450,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/faq">FAQ</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 180,
            top: 25,
            width: "110px",
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
          <Link to="/login">{ML("OTURUM_AC")}</Link>
        </Button>
        <Button
          style={{
            position: "absolute",
            right: 320,
            top: 25,
            width: "100px",
            height: "50px",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            backgroundColor: "#13C2C2",
            borderColor: "#13C2C2",
          }}
          type="primary"
        >
          <Link to="/yenideneme">{ML("KAYIT_OL")}</Link>
        </Button>
        <LanguageComponent/>
      </Header>
      <Layout>

            <Content
          style={{
            backgroundImage: "url(" + "./blur.png" + ")",
            padding: 600,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            style={{
              position: "absolute",
              left: 800,
              top: 180,
              color: "black",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            {ML("CRYPTOBOX_HESABINIZI_OLUSTURUN")}
          </h1>

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
                  {ML("KAYIT_OLMADIYSANIZ_LUTFEN_KAYIT_OLUNUZ_EGER_KAYITLI_HESABINIZ_VARSA_GIRIS_YAPINIZ")}
                </h2>
              }
              size="large"
            >
              <Form
                style={{ marginTop: "260px", marginLeft: "200px" }}
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 9 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label={ML("AD_SOYAD")}
                  name="username"
                  rules={[
                    { required: true, message: ML("BU_KISIM_BOS_BIRAKILAMAZ") },
                  ]}
                >
                  <Input
                    onChange={handlechangeName}
                    style={{ width: "350px", height: "40px" }}
                    placeholder={ML("AD_SOYAD")}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    style={{ background: "#13C2C2", borderColor: "#13C2C2" }}
                    type="primary"
                    htmlType="submit"
                  >
                    {ML("KAYIT_OL")}
                  </Button>
                </Form.Item>
              </Form>

              
            </Spin>
          </Card.Grid>
        </Content>
        

        <Footer style={{ background: "white", padding: 60 }}>
          <h2 style={{ position: "absolute", right: 1000 }}>
            {" "}
            {ML("2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR")}
          </h2>
          .
        </Footer>
      </Layout>
    </Layout>
  );
}
