import React, { Component } from "react";
import { Typography } from "antd";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";
import Foot from "./foot";
import Head from "./head";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

class MetaMask extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Layout>
          <Head />
          <Layout>
            <Content
              style={{
                background: "white",
                padding: 590,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2
                style={{
                  fontWeight: "regular",
                  fontSize: "25px",
                  position: "absolute",
                  left: 280,
                  top: 200,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "55px",
                    color: "#FA8C16",
                  }}
                >
                  {ML("METAMASK_NEDIR")}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "45px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  <br />
                  {ML("ETHEREUM_BLOCKCHAIN_ILE_ETKILESIM")}
                  <br />
                  {ML("KURMAK_ICIN_KULLANILAN_BIR_KRIPTO")}
                  <br />
                  {ML("CUZDANIDIR")}
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  {ML("TOKEN_SATIN_ALIN_SAKLAYIN_GONDERIN_VE")}
                  <br />
                  {ML("DEGISTIRIN")}
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "39px",
                    color: "#000000",
                    wordSpacing: 3,
                  }}
                >
                  {" "}
                  {ML("BIR_TARAYICI_UZANTISI_VE_BIR_MOBIL_UYGULAMA")}
                  <br />
                  {ML("OLARAK_MEVCUT_OLAN_METAMASK_SIZE_KEY")}
                  <br />
                  {ML("VAULT_GUVENLI_OTURUM_ACMA_TOKEN")}
                  <br />
                  {ML("CUZDANI_VE_TOKEN_TAKASI_ILE_DIJITAL")}
                  <br />
                  {ML("VARLIKLARINIZI_YONETMEK_ICIN_IHTIYACINIZ_OLAN")}
                  <br />
                  {ML("HER_SEYI_SAGLAR")}
                </p>
              </h2>

              <Image
                style={{ position: "absolute", left: 700, top: -300 }}
                width={800}
                src="./örnek1.png"
              />
            </Content>
            <Content
              style={{
                background: "white",
                padding: 590,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2
                style={{
                  position: "absolute",
                  left: 150,
                  top: 1400,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "39px",
                    color: "#434343",
                  }}
                >
                  {ML("BLOCKCHAIN_UYGULAMALARINI_KESFEDIN")}
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "37px",
                    color: "#000000",
                    wordSpacing: 3,
                  }}
                >
                  {ML("METAMASK_BLOCK_ZINCIRI_TABANLI")}
                  <br />
                  {ML("UYGULAMALARA_BAGLANMANIN_EN_BASIT_AMA")}
                  <br />
                  {ML("EN_GUVENLI_YOLUN_SAGLAR_YENI_MERKEZI")}
                  <br />
                  {ML("OLMAYAN_WEBDE_ETKILESIM_KURARKEN")}
                  <br />
                  {ML("KONTROL_HER_ZAMAN_SIZDEDIR")}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#434343",
                    wordSpacing: 3,
                  }}
                >
                  {ML("VERILERINIZE_SAHIP_OLUN")}
                </p>
                <p
                  style={{
                    fontWeight: "regular",
                    fontSize: "37px",
                    color: "#000000",
                    wordSpacing: 3,
                  }}
                >
                  {ML("METAMASK_CIHAZINIZDA_SIFRELER_VE")}
                  {ML("ANAHTARLAR_OLUŞTURUR_BOYLECE")}
                  <br />
                  {ML("HESAPLARINIZA_VE_VERILERINIZE_YALNIZCA_SIZ")}
                  <br />
                  {ML("ERISEBILIRSINIZ_NEYI_PAYLASACAGINIZI_VE")}
                  <br />
                  {ML("NEYI_GIZLI_TUTACAGINIZI_HER_ZAMAN_SIZ")}
                  <br />
                  {ML("SECERSINIZ")}.
                </p>
              </h2>
              <Image
                style={{ position: "absolute", left: 800, top: -580 }}
                width={600}
                src="./örnek2.png"
              />
              <Image
                style={{ position: "absolute", left: 800, top: -50 }}
                width={600}
                src="./örnek3.png"
              />
            </Content>

            <Content
              style={{
                background: "white",
                padding: 300,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  left: 700,
                  top: 2450,
                  width: "1000px",
                  height: "500px",
                }}
                src="https://www.youtube.com/embed/YVgfHZMFFFQ "
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />

              <Link to={{ pathname: "metamask.io/download/" }} target="_blank">
                {" "}
                <h2
                  style={{
                    position: "absolute",
                    left: 840,
                    color: "#FA8C16",
                    top: 3000,
                    fontWeight: "bold",
                    fontSize: "35px",
                    fontFamily: "Verdana",
                  }}
                >
                  {ML("HEMEN_TARAYICIN_ICIN_METAMASK_INDIR")}
                </h2>{" "}
              </Link>
            </Content>
            <Foot />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default MetaMask;
