import { Layout, Avatar, Switch } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import Tree, { DataNode } from "antd/lib/tree";
import { useState } from "react";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";
import Head from "./head";
import Foot from "./foot";

const { Header, Footer, Content } = Layout;

const treeData: DataNode[] = [
  {
    title: (
      <h2 style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}>
        {ML("METMASK_HESABIM_YOK_YINE_DE_CRYTOBOXA_KAYIT_OLABILIR_MIYIM")}
      </h2>
    ),
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: (
          <h2 style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            {ML(
              "MAALESEF_KAYIT_OLMAK_ICIN_METAMASK_HESABIN_OLMASI_GEREKIYOR_DETAYLI_BILGI"
            )}
            <br />
            {ML("VE_INDIRME_DETAYLARI_ICIN")}
            <Link style={{ color: "orange" }} to="/meta_mask">
              {ML("METAMASK_NEDIR")}
            </Link>{" "}
            {ML("SAYFAMIZA_GOZ_ATABILIRSIN")}
          </h2>
        ),
        key: "0-0-0",
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: (
      <h2 style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}>
        {ML("CRYPTOBOX_GUVENILIR_BIR_UYGULAMA_MI")}
      </h2>
    ),
    key: "0-1",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: (
          <h2 style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            {ML(
              "ETHEREUM_EN_GUVENLI_KRIPTO_PARA_BIRIMLERINDEN_BIR_TANESIDIR_CRYPTOBOX_DA"
            )}
            <br />
            {ML(
              "GUVENILIRLIGINI_ETHEREUMUN_AKILLI_KONTRAT_VE_GUVENLI_FINANSAL_ISLEMLERI_DESTEKELEMESINDEN_ALIR"
            )}{" "}
          </h2>
        ),
        key: "0-1-0",
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: (
      <h2 style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}>
        {ML("CRYPTOBOXA_KIMLER_UYE_OLABILIR")}
      </h2>
    ),
    key: "0-2",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: (
          <h2 style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            {ML(
              "METAMASK_HESABI_ETHEREUM_NETWORKUNDE_OLAN_HESABINDA_ETHEREUMU_BULUNAN"
            )}
            <br />
            {ML(
              "VE_COCUKLARI_ICIN_KRIPTO_BIRIKIMI_YAPMAK_ISTEYEN_TUM_EBEVEYNLER_UYE_OLABILIR"
            )}{" "}
          </h2>
        ),
        key: "0-2-0",
        icon: <CarryOutOutlined />,
      },
    ],
  },
];

export default function FAQ() {
  const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>(
    true
  );
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean>(false);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log("selected", selectedKeys, info);
  };

  const onSetLeafIcon = (checked: boolean) => {
    setShowLeafIcon(checked);
    setShowLine({ showLeafIcon: checked });
  };

  const onSetShowLine = (checked: boolean) => {
    setShowLine(checked ? { showLeafIcon } : false);
  };

  window.scrollTo(0, 0);
  return (
    <div>
      <Layout>
        <Head />
        <Layout>
          <Content
            style={{
              background: "white",
              padding: 400,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                position: "absolute",
                left: 900,
                top: 250,
                color: "#13C2C2",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              {ML("SIK_SORULAN_SORULAR")}
            </h2>
            <Tree
              style={{
                position: "absolute",
                left: 200,
                top: -100,
                width: "1500px",
                height: "400px",
              }}
              // showLine={showLine}
              showIcon={showIcon}
              defaultExpandedKeys={["0-0-0", "0-1-0", "0-2-0"]}
              onSelect={onSelect}
              treeData={treeData}
            />
          </Content>
          <Foot />
        </Layout>
      </Layout>
    </div>
  );
}
