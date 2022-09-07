import React, { useEffect, useState } from "react";
import {
  Card,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  notification,
  Spin,
} from "antd";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "antd";
import { WalletService } from "../services/wallet-service";
import { NotificationPlacement } from "antd/lib/notification";
import { TeamOutlined } from "@ant-design/icons";

import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";

import { constants } from "os";
import Foot from "./foot";

const { Header, Content } = Layout;

export default function AddChildren() {
  type NotificationType = "info" | "warning";

  const Başarılı = (
    type: NotificationType,
    placement: NotificationPlacement
  ) => {
    notification.info({
      message: `Bilgilendirme Mesajı `,
      description: ML(
        "COCUGUNUZUN_EKLENMESI_ICIN_METAMASKTAN_UCRETI_ONAYLAYIN_LUTFEN"
      ),
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
        if (role == "Unregistered" || role == "Child") {
        } else if (role == "Parent") {
          setLoading(false);
        }
      });
    });
  }, []);
  window.scrollTo(0, 0);

  const addChildrendFunction = async () => {
    try {
      await WalletService.connect().then(async (result) => {
        const response = await WalletService.contract.addChild(
          childmetamask,
          childbday,
          childname
        );
        console.log("Çocuk Eklendi");
        // const parent = await WalletService.contract.getParent();
        // console.log(parent)
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const [childname, setChildName] = useState("");
  const [childbday, setChildBday] = useState(0);
  const [childmetamask, setChildMetaMask] = useState("");

  const handlechangeChildName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChildName(event.target.value);
  };

  const handlechangeChildMetamask = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChildMetaMask(event.target.value);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    let dates = new Date(dateString);
    dates.setTime(dates.getTime() + 60 * 60 * 1000);

    const dateFormatted = dates.getTime();
    console.log(dateFormatted);
    setChildBday(dateFormatted);
  };

  const onFinish = (values: any) => {
    addChildrendFunction();
    Başarılı("info", "bottom");
    setTimeout(() => {
      navigate("/children");
    }, 10000);
  };

  const onFinishFailed = (errorInfo: any) => {
    Başarısız("warning");
  };

  return (
    <div>
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

          <LanguageComponent />
        </Header>
        <Layout>
          <Content
            style={{
              background: "white",
              padding: 600,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: 920,
                top: 180,
                color: "#13C2C2",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              {ML("COCUGU_EKLE")}
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
                    {ML("LUTFEN_METAMASK_HESABINA_BAGLANIN")}
                  </h2>
                }
              >
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
                    label={ML("AD_SOYAD")}
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: ML("BU_KISIM_BOS_BIRAKILAMAZ"),
                      },
                    ]}
                  >
                    <Input
                      onChange={handlechangeChildName}
                      style={{ width: "350px", height: "40px" }}
                      placeholder={ML("AD_SOYAD")}
                    />
                  </Form.Item>
                  <Form.Item
                    label={ML("METAMASK_ADRESI")}
                    name="MetaMask Adresi"
                    rules={[
                      {
                        required: true,
                        message: ML("BU_KISIM_BOS_BIRAKILAMAZ"),
                      },
                    ]}
                  >
                    <Input
                      onChange={handlechangeChildMetamask}
                      style={{ width: "350px", height: "40px" }}
                      placeholder={ML("COCUGUNUZUN_METAMASK_HESABI")}
                    />
                  </Form.Item>

                  <Form.Item label={ML("COCUGUNUZUN_DOGUM_TARIHI")}>
                    <DatePicker
                      style={{ width: "500px", height: "40px" }}
                      onChange={onChange}
                      placeholder={ML("COCUGUNUZUN_DOGUM_TARIHI")}
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
                    <Button
                      style={{
                        width: "110px",
                        height: "40px",
                        background: "#13C2C2",
                        borderColor: "#13C2C2",
                      }}
                      type="primary"
                      htmlType="submit"
                    >
                      {ML("COCUGU_EKLE")}
                    </Button>
                  </Form.Item>
                </Form>
              </Spin>
            </Card.Grid>
          </Content>
          <Foot />
        </Layout>
      </Layout>
    </div>
  );
}