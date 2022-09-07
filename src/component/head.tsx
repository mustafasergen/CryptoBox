import React, { Component } from "react";
import { Layout, Avatar } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { ML } from "../i18n.config";
import LanguageComponent from "./language.component";

const { Header } = Layout;

const Head: React.FC = () => (
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

        <Button
          style={{
            position: "absolute",
            right: 530,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/meta_mask">{ML("METAMASK_NEDIR")}</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 780,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/about">{ML("HAKKIMIZDA")}</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 450,
            top: 25,
            color: "#13C2C2",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          type="link"
          danger
        >
          <Link to="/faq">FAQ</Link>
        </Button>

        <Button
          style={{
            position: "absolute",
            right: 180,
            top: 25,
            width: "110px",
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
          <Link to="/signin">{ML("OTURUM_AC")}</Link>
        </Button>
        <Button
          style={{
            position: "absolute",
            right: 320,
            top: 25,
            width: "100px",
            height: "50px",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            backgroundColor: "#13C2C2",
            borderColor: "#13C2C2",
          }}
          type="primary"
        >
          <Link to="/signup">{ML("KAYIT_OL")}</Link>
        </Button>
        <LanguageComponent />
      </Header>
    </Layout>
  </>
);

export default Head;
