import React, { useState } from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';




const { Header, Content } = Layout;



export default function CocukEkle() {

  window.scrollTo(0, 0)


  const [childname, setChildName] = useState("");
  const [childsurname, setChildSurname] = useState("");
  const [childbday, setChildBday] = useState("");
  const [childmetamask, setChildMetaMask] = useState("");

  const handlechangeChildName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildName(event.target.value);

  }
  const handlechangeChildSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildSurname(event.target.value);

  }
  const handlechangeChildBday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildBday(event.target.value);

  }
  const handlechangeChildMetamask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildMetaMask(event.target.value);

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
            background:"white", 
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <Card.Grid style={{ width: '1200px', height: '790px', position: 'absolute', left: 570, top: 265, backgroundColor: '#E6FFFB' }}>

              <h2 style={{ position: 'absolute', left: 320, marginTop: '30px', color: 'black', fontSize: '30px' }}>
                Çocuğunuzun Adı
                <br />
                <br />
                <br />
                Çocuğunuzun Soyadı
                <br /> <br /> <br />
                Çocuğunuzun Doğum Tarihi
                <br /> <br /> <br />
                Çocuğunuzun Metamask Hesabı
              </h2>
              <Input onChange={handlechangeChildName} style={{ position: 'absolute', left: 320, marginTop: '90px', width: '500px', height: '70px' }} placeholder="Çocuğunuzun İsmi" />
              <Input onChange={handlechangeChildSurname} style={{ position: 'absolute', left: 320, marginTop: '230px', width: '500px', height: '70px' }} placeholder="Çocuğunuzun Soyadı" />
              <Input onChange={handlechangeChildBday} style={{ position: 'absolute', left: 320, marginTop: '370px', width: '500px', height: '70px' }} placeholder="Çocuğunuzun Doğum Tarihi" />
              <Input onChange={handlechangeChildMetamask} style={{ position: 'absolute', left: 320, marginTop: '510px', width: '500px', height: '70px' }} placeholder="Çocuğunuzun Metamask Adresi" />
              {childname}<br />
              {childsurname}<br />
              {childbday}<br />
              {childmetamask}<br />


              <Link to="/cocuklarim" ><Button style={{ position: 'absolute', left: 380, marginTop: '540px', width: '350px', height: '80px', backgroundColor: '#13C2C2', fontSize: '35px', borderColor: '#13C2C2' }} type="primary" >Çocuğu Ekle</Button></Link>


            </Card.Grid>

          </Content>
        </Layout>
      </Layout>
    </div>

  )



}