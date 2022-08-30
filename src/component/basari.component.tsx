import React, { Component, useState } from 'react';
import { Card, Input } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import LanguageComponent from './language.component';
import { ML } from '../i18n.config';
declare var window: any



const { Header, Footer, Content } = Layout;



export default function Basari() {

  window.scrollTo(0, 0)


  return (
    <div>
      <Layout>
        <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
          <Avatar style={{ position: 'absolute', right: 100, top: 35, }} src='./coin2.png' />

          <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

          <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

            type="link" danger><Link to="/">CryptoBox</Link></Button>

          <LanguageComponent/>
        </Header>
        <Layout>
          <Content style={{
            background:'white',
            padding: 600,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>

                <Card.Grid style={{width:'1200px', height:'750px',position:'absolute', left:570, top:265,backgroundColor:'#13C2C2'}}>
                  
                  <h2 style={{fontWeight:'bold',fontSize:'40px',position:'absolute', left:280,marginTop:'300px',textAlign:'center',color:'white'}}>{ML("ISLEMINIZ_BASARIYLA_TAMAMLANMISTIR")}</h2>
  
                  </Card.Grid>

          </Content>
        </Layout>
      </Layout>
    </div>

  )



}
