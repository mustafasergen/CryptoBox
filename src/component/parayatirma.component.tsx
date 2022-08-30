import React, { Component, useState } from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { ML } from '../i18n.config';




const { Header, Footer, Content } = Layout;



export default function ParaYatırma() {

  window.scrollTo(0, 0)

  const [paymoney, setPayMoney] = useState("");


  const handlechangePayMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayMoney(event.target.value);

  }

  return (
    <div>
      <Layout>
        <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
          <Avatar style={{ position: 'absolute', right: 100, top: 35, }} src='./coin2.png' />

          <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

          <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

            type="link" danger><Link to="/">CryptoBox</Link></Button>
        </Header>
        <Layout>
          <Content style={{
            background:'white',
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <Card.Grid style={{ width: '1000px', height: '650px', position: 'absolute', left: 680, top: 265, backgroundColor: '#E6FFFB' }}>

              <h2 style={{ position: 'absolute', left: 250, marginTop: '220px', color: 'black', fontSize: '30px' }}>
              {ML("TUTAR")}
              </h2>
              <h2 style={{ position: 'absolute', left: 700, marginTop: '220px', color: 'black', fontSize: '30px' }}>
                ETH
              </h2>

              <Input onChange={handlechangePayMoney} style={{ position: 'absolute', left: 430, marginTop: '210px', width: '200px', height: '80px' }} placeholder="" />

              {paymoney}

              <Link to="/basari" ><Button style={{ position: 'absolute', left: 350, marginTop: '380px', width: '350px', height: '80px', backgroundColor: '#13C2C2', fontSize: '35px', borderColor: '#13C2C2' }} type="primary" ></Button>{ML("ETHEREUM_YATIR")}</Link>

            </Card.Grid>
          </Content>
        </Layout>
      </Layout>
    </div>

  )



}
