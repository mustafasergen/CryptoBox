import { Layout, Avatar, Menu, MenuProps, Card, Table, Row } from "antd";
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

const { Header, Footer, Sider, Content } = Layout;

function Cocuk() {
  window.scrollTo(0, 0);

  const [childs, setChilds] = useState<Child[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then(async (role: string) => {
        if (role == "Unregistered" || role== 'Child') {
          
          console.log("kayıtlıdegil");
        } else if (role == "Parent") {
          const child = await WalletService.contract.getChildrenList();
          setChilds(child);
          setLoading(false);
          
        }
      });
    });
  }, []);

  const dataSource = [childs];
  const columns = [
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>İsim</h2>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>Bakiye</h2>,
      dataIndex: "amount",
      key: "amount",
      // // render: (value : number,child:Child) =>{
      // //   return <>
      // //   {child.amount}
      // //   </>
      // }
    },
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>MetaMask Adresi</h2>,
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
      <Link to="/after_signup">
        <h2
          style={{
            fontSize: "30px",
            color: "black",
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          My CrytoBox
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
          fontSize: "30px",
          color: "black",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        Çocuklarım
      </h2>,
      "2",
      <TeamOutlined
        style={{ position: "absolute", marginTop: "6px", fontSize: "35px" }}
      />
    ),
    getItem(
      <h2
        style={{
          fontSize: "30px",
          color: "black",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        Çıkış Yap
      </h2>,
      "3",
      <ExportOutlined
        style={{ position: "absolute", marginTop: "6px", fontSize: "35px" }}
      />
    ),
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
          <Avatar
            style={{ position: "absolute", right: 100, top: 35 }}
            src="./coin2.png"
          />

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
        </Header>
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
            
            <Table
              style={{
                position: "absolute",
                left: 850,
                top: 400,
                width: "900px",
              }}
              dataSource={childs}
              columns={columns}
            />
            <Link to="/cocukekleyeni">
              <Card.Grid
                style={{
                  width: "900px",
                  height: "100px",
                  position: "absolute",
                  left: 850,
                  top: 780,
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
                  Yeni Çocuk Ekle
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
        <Footer
          style={{
            background: "white",
            padding: 60,
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.7)",
          }}
        >
          <h2 style={{ position: "absolute", right: 1000, top: 1300 }}>
            {" "}
            © 2022 Intertech, Inc. Her hakkı saklıdır
          </h2>
        </Footer>
      </Layout>
    </div>
  );
}
export default Cocuk;
