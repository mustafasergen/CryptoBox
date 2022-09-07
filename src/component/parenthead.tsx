import React, { Component } from "react";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";
import { TeamOutlined } from "@ant-design/icons";

const { Header } = Layout;

const ParentHead: React.FC = () => (
  <>
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
          <LanguageComponent />
        </Header>
        </Layout>
  </>
);

export default ParentHead;



