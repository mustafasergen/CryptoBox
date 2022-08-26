import React, { Component, useState } from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { WalletService } from '../services/wallet-service';





const { Header, Footer, Content } = Layout;


export default function Paracekme() {

  window.scrollTo(0, 0)


  const withdrawParentFunction = async () => {
    try {
      console.log("4")
      console.log(pullmoney)

      await WalletService.connect().then(async (result) => {
        console.log(pullmoneyFrom)
        console.log(pullmoney)
        const response = await WalletService.contract.withdrawParent(pullmoneyFrom, parseInt(pullmoney, 10));
        console.log(pullmoney)
        const hesap = await WalletService.contract.getAmount("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        console.log(hesap.toString())
        // const parent = await WalletService.contract.getParent();
        // console.log(parent)
      });
    }
    catch (error) {
      console.log(error)
    }

  };


  const [pullmoney, setPullMoney] = useState("");
  const [pullmoneyFrom, setPullMoneyFrom] = useState("");


  const handlechangePullMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPullMoney(event.target.value);

  }
  const handlechangePullMoneyFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPullMoneyFrom(event.target.value);

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
            background: 'white',
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <Card.Grid style={{ width: '1000px', height: '650px', position: 'absolute', left: 680, top: 265, backgroundColor: '#E6FFFB' }}>

              <h2 style={{ position: 'absolute', left: 250, marginTop: '270px', color: 'black', fontSize: '30px' }}>
                Tutar:
              </h2>
              <h2 style={{ position: 'absolute', left: 700, marginTop: '270px', color: 'black', fontSize: '30px' }}>
                ETH
              </h2>
              <h2 style={{ position: 'absolute', left: 250, marginTop: '150px', color: 'black', fontSize: '30px' }}>
                Adres:
              </h2>

              <Input onChange={handlechangePullMoney} style={{ position: 'absolute', left: 430, marginTop: '140px', width: '200px', height: '80px' }} placeholder="Adres" />
              <Input onChange={handlechangePullMoneyFrom} style={{ position: 'absolute', left: 430, marginTop: '260px', width: '200px', height: '80px' }} placeholder="Tutar" />

              {pullmoneyFrom}
              {pullmoney}






              <Link to="/basari" ><Button onClick={() => { withdrawParentFunction(); }} style={{ position: 'absolute', left: 350, marginTop: '380px', width: '370px', height: '80px', backgroundColor: '#13C2C2', fontSize: '35px', borderColor: '#13C2C2' }} type="primary" >Ethereum Çek</Button></Link>


            </Card.Grid>

          </Content>

          <Footer style={{ background: "white", padding: 60, }}>
            <h2 style={{ position: 'absolute', right: 1000, }}> © 2022 Intertech, Inc. Her hakkı saklıdır</h2>.
          </Footer>
        </Layout>
      </Layout>
    </div>

  )



}