import React, { Component } from "react";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { ML } from "../i18n.config";
import Head from "./head";
import Foot from "./foot";

const { Header, Footer, Content } = Layout;

class Hakkımda extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
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
                position: "absolute",
                left: 150,
                color: "#434343",
                top: 280,
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "Verdana",
              }}
            >
              {ML("YATIRIMINIZ")}
              <br />
              {ML("COCUGUNUZLA_BERABER_BUYUSUN")}
            </h2>
            <h2
              style={{
                position: "absolute",
                left: 150,
                color: "#434343",
                top: 420,
                fontSize: "25px",
                fontWeight: "Regular",
                fontFamily: "Verdana",
              }}
            >
              {ML("BEBEGINIZIN_SIZE_DOGRU_ATTIGI_ILK_ADIMLAR_GIBI_SIZ_DE_ONUN")}
              <br />
              {ML("GELECEGI_ICIN_BIRIKTIRMEYE_ILK_ADIMI_ATIN_ÇOCUGUNUZ_ICIN")}
              <br />
              {ML(
                "ACACAGINIZ_HESAPLA_ONUN_ICIN_KRIPTO_PARA_BIRIKTIREBILIRSINIZ"
              )}
              <br />
              <br />
              {ML("EGER")}
            </h2>

            <h2
              style={{
                position: "absolute",
                left: 200,
                color: "#434343",
                top: 700,
                fontSize: "30px",
                fontWeight: "Regular",
                fontFamily: "Verdana",
              }}
            >
              {ML("METAMASK_HESABINIZ_VARSA")}
            </h2>
            <h2
              style={{
                position: "absolute",
                left: 200,
                color: "#434343",
                top: 850,
                fontSize: "30px",
                fontWeight: "Regular",
                fontFamily: "Verdana",
              }}
            >
              {ML("ETHEREUM_NETWORKUNDE_ISE")}
            </h2>
            <h2
              style={{
                position: "absolute",
                left: 200,
                color: "#434343",
                top: 1000,
                fontSize: "30px",
                fontWeight: "Regular",
                fontFamily: "Verdana",
              }}
            >
              {ML("BIR_MIKTAR_ETHEREUMUNUZ_VARSA")}
            </h2>

            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 80,
                color: "#87E8DE",
                top: 680,
                fontSize: "90px",
              }}
            />
            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 80,
                color: "#87E8DE",
                top: 830,
                fontSize: "90px",
              }}
            />
            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 80,
                color: "#87E8DE",
                top: 980,
                fontSize: "90px",
              }}
            />

            <Link to="/signup">
              <Button
                style={{
                  position: "absolute",
                  left: 270,
                  top: 1100,
                  width: "280",
                  height: "80px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                  backgroundColor: "#13C2C2",
                  borderColor: "#13C2C2",
                }}
                type="primary"
              >
                {ML("HEMEN_BASLAYIN")}
              </Button>
            </Link>

            <Avatar
              style={{
                position: "absolute",
                left: 1400,
                top: 200,
                width: "850px",
                height: "850px",
              }}
              src="./circle1.png"
            />
            <Image
              style={{ position: "absolute", left: 800, top: -500 }}
              width={500}
              src="./anne1.png"
            />
            <Image
              style={{ position: "absolute", left: 700, top: -150 }}
              width={500}
              src="./anne2.png"
            />
          </Content>

          <Content
            style={{
              background: "white",
              padding: 700,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                position: "absolute",
                left: 790,
                color: "orange",
                top: 1300,
                fontWeight: "bold",
                fontSize: "43px",
                fontFamily: "Verdana",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {ML("COCUGUNUZUN_GELECEGI_ICIN")}
              <br /> {ML("SIMDI_YATIRIM_YAPIN")}
            </h2>
            <br />
            <Image
              style={{ position: "absolute", left: -120, top: -590, zIndex: 0 }}
              width={1200}
              src="./bilgisayar1.png"
            />

            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 910,
                color: "#87E8DE",
                top: 2400,
                fontSize: "70px",
              }}
            />
            <br />
            <h2
              style={{
                position: "absolute",
                left: 1000,
                color: "#434343",
                top: 2400,
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "Verdana",
                zIndex: 1,
              }}
            >
              {ML("HESAP_OLUSTURUN")}
            </h2>
            <br />
            <h2
              style={{
                position: "absolute",
                left: 850,
                color: "#434343",
                top: 2480,
                fontSize: "25px",
                fontFamily: "Verdana",
                zIndex: 1,
              }}
            >
              {ML("WEB_SITEMIZDEN_SANIYELER_ICINDE_HESABINI_OLUSTUR")}
            </h2>
          </Content>
          <Content
            style={{
              background: "white",
              padding: 700,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              style={{ position: "absolute", left: -120, top: -960, zIndex: 0 }}
              width={1200}
              src="./bilgisayar2.png"
            />

            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 800,
                color: "#87E8DE",
                top: 3550,
                fontSize: "70px",
              }}
            />
            <br />
            <h2
              style={{
                position: "absolute",
                left: 900,
                color: "#434343",
                top: 3550,
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "Verdana",
              }}
            >
              {ML("YATIRIM_YAPMAYA_BASLAYIN")}
            </h2>
            <br />
            <h2
              style={{
                position: "absolute",
                left: 730,
                color: "#434343",
                top: 3630,
                fontSize: "25px",
                fontFamily: "Verdana",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {ML(
                "EN_GUVENILIR_KRIPTO_PARA_BIRIMLERINDEN_OLAN_ETHEREUM_ILE_BIRIKIMINIZ"
              )}
              <br />
              {ML("SIZE_KAZANDIRMAYA_BASLASIN")}
            </h2>
          </Content>
          <Content
            style={{
              background: "white",
              padding: 700,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              style={{
                position: "absolute",
                left: -120,
                top: -1200,
                zIndex: 0,
              }}
              width={1200}
              src="./bilgisayar3.png"
            />

            <CheckCircleOutlined
              style={{
                position: "absolute",
                left: 900,
                color: "#87E8DE",
                top: 4730,
                fontSize: "70px",
              }}
            />
            <br />
            <h2
              style={{
                position: "absolute",
                left: 1000,
                color: "#434343",
                top: 4730,
                fontWeight: "bold",
                fontSize: "40px",
                fontFamily: "Verdana",
              }}
            >
              {ML("BIRIKIMINIZ_BUYUSUN")}
            </h2>
            <br />
            <h2
              style={{
                position: "absolute",
                left: 740,
                color: "#434343",
                top: 4810,
                fontSize: "25px",
                fontFamily: "Verdana",
                textAlign: "center",
              }}
            >
              {ML(
                "AILELER_ICIN_BIRIKIM_YAPMAYI_KOLAY_VE_EGLENCELI_HALE_GETIREN_CRYPTOBOX_ILE"
              )}
              <br />
              {ML("COCUGUNUZ_ICIN_BIRIKIM_YAPIN")}
            </h2>
          </Content>
          <Content
            style={{
              background: "white",
              padding: 200,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                position: "absolute",
                left: 950,
                color: "orange",
                top: 5050,
                fontWeight: "bold",
                fontSize: "43px",
                fontFamily: "Verdana",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {ML("NEDEN_CYRPTOBOX")}
            </h2>
            <br />

            <h2
              style={{
                position: "absolute",
                left: 350,
                top: 5200,
                fontFamily: "Verdana",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "Bold",
                  fontSize: "39px",
                  color: "#13C2C2",
                }}
              >
                {ML("FINANSAL_GUCLENDIRME")}
              </p>
              <p
                style={{
                  fontWeight: "Regular",
                  fontSize: "33px",
                  color: "#434343",
                }}
              >
                {ML("CRYPTOBOX_AILELERIN_VE_COCUKLARIN_CESITLI")}
                <br />
                {ML("ACILARDAN_FINANSAL_OLARAK_GUCLENMESINE_KATKI")}
                <br />
                {ML("SAGLAR_BIR_YATIRIM_ARACI_OLAN_CRYPTOBOX")}
                <br />
                {ML("SAYESINDE_AILELER_FINANSAL_BILGILERINI")}
                <br />
                {ML("KULLANARAK_KARARLAR_ALIRLAR_VE_COCUKLARINI")}
                <br />
                {ML("18_YASINDA_HESAP_SAHIBI_OLMAYA_HAZIRLARLAR")}
              </p>
            </h2>
            <h2
              style={{
                position: "absolute",
                left: 350,
                top: 5650,
                fontFamily: "Verdana",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "Bold",
                  fontSize: "39px",
                  color: "#13C2C2",
                }}
              >
                {ML("FINANSAL_OZGURLUK")}
              </p>
              <p
                style={{
                  fontWeight: "Regular",
                  fontSize: "33px",
                  color: "#434343",
                }}
              >
                {ML("COCUKLARIN_YATIRIMLARI_OLDUGUNU_BILEREK")}
                <br />
                {ML("BUYUMELERI_ONLARI_BU_BIRIKIMLE_NELER")} <br />
                {ML("YAPABILECECEKLERI_KONUSUNDA_ONLARI_HAYAL")} <br />
                {ML("KURMAYA_TESVIK_EDER_BU_BIRIKIMLERINI_EGITIME")} <br />
                {ML("ILK_GIRISIMLERINE_YA_DA_DUNYAYI_GEZME")}
                <br />
                {ML("AMACLARIYLA_KULLANABILME_FIRSATI_VERIR")}
              </p>
            </h2>
            <Image
              style={{
                position: "absolute",
                right: -1400,
                top: -800,
                zIndex: 0,
              }}
              width={700}
              src="./kumbara1.png"
            />
            <Image
              style={{
                position: "absolute",
                right: -700,
                top: -300,
                zIndex: 0,
              }}
              width={700}
              src="./kumbara2.png"
            />
          </Content>
          <Foot />
        </Layout>
      </Layout>
    );
  }
}
export default Hakkımda;
