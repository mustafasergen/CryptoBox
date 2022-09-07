import React, { Component, useEffect, useState } from "react";
import { Card, notification, Spin } from "antd";
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

export default function Login() {
  type NotificationType = "info" | "warning";
  const openNotificationWithIcon = (
    type: NotificationType,
    placement: NotificationPlacement
  ) => {
    notification.info({
      message: `Bilgilendirme Mesajı `,
      description: "Lütfen Önce Hesap Oluşturun",
      placement,
    });
  };

  window.scrollTo(0, 0);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then((role: string) => {
        if (role == "Unregistered") {

          openNotificationWithIcon("info", "bottom");
        } else if (role == "Parent" || role == "Child") {
          console.log("parent or Child");
          setLoading(false);
        }
      });
    });
  }, []);

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
              style={{ marginTop: "290px" }}
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
              <Link to="/after_signup_parent">
                <Button
                  style={{
                    position: "absolute",
                    right: 340,
                    marginTop: "200px",
                    width: "500px",
                    height: "80px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "25px",
                    backgroundColor: "#13C2C2",
                    borderColor: "#13C2C2",
                  }}
                >
                  {ML("EBEVEYN_HESABI_OLARAK_GIRIS_YAPINIZ")}
                </Button>
              </Link>
              <Link to="/after_signup_child">
                <Button
                  style={{
                    position: "absolute",
                    right: 340,
                    marginTop: "360px",
                    width: "500px",
                    height: "80px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "25px",
                    backgroundColor: "#13C2C2",
                    borderColor: "#13C2C2",
                  }}
                >
                  {ML("COCUK_HESABI_OLARAK_GIRIS_YAPINIZ")}
                </Button>
              </Link>
            </Spin>
          </Card.Grid>
        </Content>

        <Foot />
      </Layout>
    </Layout>
  );
}
