import { Layout, Avatar, Menu, MenuProps, Card, Table, Row, Drawer } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Image } from "antd";
import {
  BellOutlined,
  ExportOutlined,
  PlusOutlined,
  SearchOutlined,
  TeamOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { WalletService } from "../services/wallet-service";
import { useEffect, useState } from "react";
import { Child } from "../services/contract-service";
import { ethers } from "ethers";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";
import Foot from "./foot";
import ParentHead from "./parenthead";

const { Header, Footer, Sider, Content } = Layout;

function MyChildren() {
  window.scrollTo(0, 0);

  const [childs, setChilds] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then(async (role: string) => {
        if (role == "Unregistered" || role == "Child") {
          console.log("kayıtlıdegil");
        } else if (role == "Parent") {
          const child = await WalletService.contract.getChildrenList();

          const sum = await WalletService.contract.getSumChildren();
          const ethValue = ethers.utils.formatEther(sum.toString());
          setChilds(child);
          setLoading(false);
          setAmount(ethValue);
        }
      });
    });
  }, []);



  const dataSource = [childs];
  const columns = [
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("AD")}</h2>
      ),
      dataIndex: "name",
      key: "name",
    },
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("BAKIYE")}</h2>
      ),
      dataIndex: "amount",
      key: "amount",
      render: (value: number, child: Child) => {
        const ethValue = ethers.utils.formatEther(child.amount.toString());
        return <>{ethValue + " ETH"}</>;
      },
    },
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>
          {ML("METAMASK_ADRESI")}
        </h2>
      ),
      dataIndex: "Address",
      key: "address",
    },
  ];

  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(
      <Link to="/after_signup_parent">
        <h2
          style={{
            fontSize: "28px",
            color: "black",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          My CryptoBox
        </h2>
      </Link>,
      "1",
      <WalletOutlined
        style={{ position: "absolute", marginTop: "6px", fontSize: "35px" }}
      />
    ),
    getItem(
      <h2
        style={{
          fontSize: "28px",
          color: "black",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        {ML("COCUKLARIM")}
      </h2>,
      "2",
      <TeamOutlined
        style={{ position: "absolute", marginTop: "6px", fontSize: "35px" }}
      />
    ),
    getItem(
      <Link to="/signin">
        <h2
          style={{
            fontSize: "28px",
            color: "black",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          {ML("OTURUM_DEGISTIRME")}
        </h2>
      </Link>,
      "3",
      <ExportOutlined
        style={{ position: "absolute", marginTop: "6px", fontSize: "35px" }}
      />
    ),
  ];

  return (
      <Layout>
        <ParentHead />
        <Layout>
          <Sider style={{ padding: 200, backgroundColor: "#13C2C2" }}>
            <Menu
              style={{
                position: "absolute",
                left: 0,
                top: 50,
                backgroundColor: "#13C2C2",
              }}
              mode="inline"
              theme="dark"
              defaultSelectedKeys={["2"]}
              items={items}
            />
          </Sider>

          <Content
            style={{
              background: "white",
              padding: 580,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 450,
                top: 130,
                color: "#13C2C2",
                fontSize: "35px",
              }}
            >
              {ML("COCUKLARA_GONDERILEN_TOPLAM_MIKTAR")}
            </h2>
            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 1290,
                top: 300,
                color: "black",
                fontSize: "55px",
              }}
            >
              {amount} ETH{" "}
            </h2>

            <Avatar
              style={{
                position: "absolute",
                left: 1100,
                top: 230,
                width: "136px",
                height: "252px",
              }}
              src="./ether1.png"
            />


            <Table
              style={{
                position: "absolute",
                left: 850,
                top: 550,
                width: "900px",
              }}
              dataSource={childs}
              columns={columns}
            />
            <Link to="/addchild">
              <Card.Grid
                style={{
                  width: "900px",
                  height: "100px",
                  position: "absolute",
                  left: 850,
                  top: 930,
                  backgroundColor: "white",
                  boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.7)",
                }}
              >
                <h2
                  style={{
                    fontWeight: "regular",
                    position: "absolute",
                    left: 50,
                    marginTop: "10px",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  {ML("COCUGU_EKLE")}
                </h2>
                <PlusOutlined
                  style={{
                    position: "absolute",
                    left: 22,
                    marginTop: "16px",
                    color: "black",
                    fontSize: "15px",
                  }}
                />
              </Card.Grid>
            </Link>
          </Content>
        </Layout>
        <Foot />
      </Layout>
  );
}
export default MyChildren;