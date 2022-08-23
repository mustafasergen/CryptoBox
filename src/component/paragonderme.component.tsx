import React, { Component, useState } from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';




const { Header, Footer, Content } = Layout;





export default function ParaGonderme() {

  window.scrollTo(0, 0)



  const [amount, setAmount] = useState("");
  const [recievingchild, setRecievingChild] = useState("");
  const [explanation, setExplanation] = useState("");

  const handlechangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);

  }
  const handlechangeRecievingChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecievingChild(event.target.value);

  }
  const handlechangeExplanation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExplanation(event.target.value);

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
            <Card.Grid style={{ width: '1200px', height: '750px', position: 'absolute', left: 570, top: 265, backgroundColor: '#E6FFFB' }}>

              <h2 style={{ position: 'absolute', left: 250, marginTop: '120px', color: 'black', fontSize: '30px' }}>
                Tutar:
                <br />
                <br />
                <br />
                Alıcı Çocuk:
                <br /> <br /> <br />
                Açıklama:
              </h2>
              <h2 style={{ position: 'absolute', left: 700, marginTop: '120px', color: 'black', fontSize: '30px' }}>
                ETH
              </h2>
              
              <Input onChange={handlechangeAmount} style={{ position: 'absolute', left: 450, marginTop: '120px', width: '200px', height: '80px' }} placeholder="" />
              <Input onChange={handlechangeRecievingChild} style={{ position: 'absolute', left: 450, marginTop: '260px', width: '200px', height: '80px' }} placeholder="Alıcı Çocuk" />
              <Input onChange={handlechangeExplanation} style={{ position: 'absolute', left: 450, marginTop: '400px', width: '500px', height: '70px' }} placeholder="İsteğe Bağlı" />
           
              {amount}
              {recievingchild}
              {explanation}


              <Link to="/basari" ><Button style={{ position: 'absolute', left: 430, marginTop: '530px', width: '350px', height: '80px', backgroundColor: '#13C2C2', fontSize: '35px', borderColor: '#13C2C2' }} type="primary" >Gönder</Button></Link>


            </Card.Grid>

          </Content>


        </Layout>
      </Layout>
    </div>

  )



}
