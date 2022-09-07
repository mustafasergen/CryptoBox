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
import Head from "./head";
import Foot from "./foot";

const { Header, Footer, Content } = Layout;

export default function Register() {
  window.scrollTo(0, 0);

  type NotificationType = "info" | "success" | "warning" | "error";
  const Kayıtolunuz = (type: NotificationType) => {
    notification[type]({
      message: ML("BILGILENDIRME_MESAJI"),
      description: ML("KAYIT_OL"),
    });
  };

  const KayıtBaşarılı = (
    type: NotificationType,
    placement: NotificationPlacement
  ) => {
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
  const Parent = (type: NotificationType, placement: NotificationPlacement) => {
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
        } else if (role == "Parent" || role == "Child") {
          Parent("warning", "bottom");

          setTimeout(() => {
            navigate("/signin");
          }, 5000);
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
    addParentFunction();
    KayıtBaşarılı("success", "bottom");
    setTimeout(() => {
      navigate("/signin");
    }, 10000);
  };

  const onFinishFailed = (errorInfo: any) => {
    Buton("error");
  };
  return (
    <Layout>
      <Head />

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
                  {ML(
                    "KAYIT_OLMADIYSANIZ_LUTFEN_KAYIT_OLUNUZ_EGER_KAYITLI_HESABINIZ_VARSA_GIRIS_YAPINIZ"
                  )}
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

        <Foot />
      </Layout>
    </Layout>
  );
}
