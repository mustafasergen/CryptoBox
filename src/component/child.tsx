import { Layout, Avatar, Menu, MenuProps, Card, Table } from "antd";
import { Button } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Image } from "antd";
import {
  BellOutlined,
  ExportOutlined,
  SearchOutlined,
  SendOutlined,
  TeamOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { WalletService } from "../services/wallet-service";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";
import { Child } from "../services/contract-service";
import axios from "axios";
import Foot from "./foot";

const { Header, Footer, Sider, Content } = Layout;

function Children() {
  window.scrollTo(0, 0);

  const [kullanıcıName, setName] = useState("");
  const [miktar, setMiktar] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const [translaction, setTrans] = useState<Child[]>([]);

  const endpoint = "https://api-rinkeby.etherscan.io/api";
  const ETHERSCAN_API_KEY = "FMS8JYNTIQF7HBFM6G34P6SK52W6JQZKSM";
  const CONTRACT_ADDRESS = "0xdA0ACe7006Ad5B36F2CdFF13276C95FBCB4D53C8";
  const deneme = "0x302955b74C969aA09bb270DAa775B65Fc9b7Bc29";

  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then(async (role: string) => {
        if (role == "Unregistered" || role == "Parent") {
          navigate("/signin");
        } else if (role == "Child") {
          const child = await WalletService.contract.getChild();
          setName(child.name);
          const ethValue = ethers.utils.formatEther(child.amount.toString());
          setMiktar(ethValue);

          console.log("--------------");
          var epoch = new Date(0);

          const time = Math.floor(child.releaseTime / 1000);
          console.log(time);

          epoch.setSeconds(time);

          var date = epoch.toISOString();

          console.log(date);

          date = date.replace("T", " ");

          const dateFormat = date.split(".")[0].split(" ")[0];
          console.log(dateFormat);
          const arr = dateFormat.split("-");
          const year = arr[0];
          const month = arr[1];
          const day = arr[2];
          console.log(day + "." + month + "." + year);
          const finalFormat = arr[2] + "." + arr[1] + "." + arr[0];
          console.log(finalFormat);
          setTime(finalFormat);

          const etherscan = await axios.get(
            endpoint +
              `?module=account&action=txlist&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETHERSCAN_API_KEY}`
          );
          let context = etherscan.data.result;
          for (let i = 0; i < context.length; i++) {
            if (context[i].to === CONTRACT_ADDRESS) {
              console.log(context[i].to);
            }
          }
          setTrans(context);
        }
      });
    });
  }, []);

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

  const dataSource = [translaction];
  const columns = [
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("KIME")}</h2>
      ),
      dataIndex: "to",
      key: "name",
    },
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("TUTAR")}</h2>
      ),
      dataIndex: "value",
      key: "amount",
    },
    {
      title: (
        <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("ISLEM")}</h2>
      ),
      dataIndex: "functionName",
      key: "address",
    },
  ];

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

          <Button
            style={{
              position: "absolute",
              right: 180,
              top: 25,
              width: "170px",
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
            <Link to="/signin">{ML("OTURUM_DEGISTIRME")}</Link>
          </Button>

          <LanguageComponent />
        </Header>
        <Layout>
          <Content
            style={{
              background: "white",
              padding: 690,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 1020,
                top: 130,
                color: "#13C2C2",
                fontSize: "35px",
              }}
            >
              {ML("HOS_GELDIN")}
            </h2>
            <h2
              style={{
                position: "absolute",
                left: 1260,
                top: 130,
                fontWeight: "bold",
                color: "#13C2C2",
                fontSize: "35px",
              }}
            >
              {kullanıcıName}!
            </h2>

            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 1000,
                top: 250,
                color: "#13C2C2",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              {ML("TARIHINDEN_ITIBAREN_ISLEM_YAPMAYA")}
              <br />
              {ML("BASLAYABILIRSIN")}
            </h2>

            <h2
              style={{
                position: "absolute",
                left: 790,
                top: 250,
                fontWeight: "bold",
                color: "#13C2C2",
                fontSize: "35px",
              }}
            >
              {time}!
            </h2>

            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 1170,
                top: 480,
                color: "black",
                fontSize: "55px",
              }}
            >
              {miktar} ETH
            </h2>
            <Avatar
              style={{
                position: "absolute",
                left: 950,
                top: 400,
                width: "136px",
                height: "252px",
              }}
              src="./ether1.png"
            />

            <Link to="/takeETH_child">
              <h2
                style={{
                  position: "absolute",
                  left: 1200,
                  top: 700,
                  color: "black",
                  fontSize: "25px",
                }}
              >
                {ML("PARA_CEK")}
              </h2>
            </Link>
            <Link to="/takeETH_child">
              <VerticalAlignTopOutlined
                style={{
                  position: "absolute",
                  left: 1230,
                  top: 650,
                  color: "black",
                  fontSize: "50px",
                }}
              />
            </Link>

            <h2
              style={{
                fontWeight: "bold",
                position: "absolute",
                left: 850,
                top: 798,
                color: "#434343",
                fontSize: "30px",
              }}
            >
              {ML("HESAP_HAREKETLERI")}
            </h2>

            <Table
              style={{
                position: "absolute",
                left: 850,
                top: 850,
                width: "900px",
              }}
              dataSource={translaction}
              columns={columns}
            />
          </Content>
        </Layout>
        <Foot />
      </Layout>
    </div>
  );
}
export default Children;
