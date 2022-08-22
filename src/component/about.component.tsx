import React, { Component } from 'react';
import { Card, Typography } from 'antd';
import { Layout, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';



const { Title } = Typography;
const { Header, Footer, Content } = Layout;





class About extends Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div>
        <Layout>
          <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
            <Avatar style={{ position: 'absolute', right: 100, top: 35, }} src='./coin2.png' />

            <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

            <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

              type="link" danger><Link to="/">{ML("CryptoBox")}</Link></Button>

            <Button style={{ position: 'absolute', right: 530, top: 25, color: '#13C2C2', fontWeight: 'bold', fontSize: '25px' }}

              type="link" danger><Link to="/meta_mask">{ML("METAMASK_NEDIR")}</Link></Button>

            <Button style={{ position: 'absolute', right: 780, top: 25, color: '#13C2C2', fontWeight: 'bold', fontSize: '25px' }}


              type="link" danger><Link to="/about">{ML("HAKKIMIZDA")}</Link></Button>

            <Button style={{ position: 'absolute', right: 450, top: 25, color: '#13C2C2', fontWeight: 'bold', fontSize: '25px' }}

              type="link" danger><Link to="">{ML("FAQ")}</Link></Button>

            <Button style={{ position: 'absolute', right: 180, top: 25, width: '110px', height: '50px', borderColor: '#13C2C2', borderWidth: '5px', color: '#13C2C2', fontWeight: 'bold', fontSize: '15px' }}

              type="primary" ghost><Link to="/login">{ML("OTURUM_AC")}</Link></Button>
            <Button style={{ position: 'absolute', right: 320, top: 25, width: '100px', height: '50px', color: 'white', fontWeight: 'bold', fontSize: '15px', backgroundColor: '#13C2C2', borderColor: '#13C2C2' }}

              type="primary"><Link to="/signup">{ML("KAYIT_OL")}</Link></Button>
               <LanguageComponent/>
          </Header>
          <Layout>

            <Content style={{
              background: "white",
              padding: 590,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
              <Card.Grid style={{ width: '1200px', height: '750px', position: 'absolute', left: 650, top: 200, backgroundColor: '#E6FFFB' }}>
                <i style={{ fontWeight: 'bold', fontSize: '35px', position: 'absolute', left: 520, marginTop: '30px', textAlign: 'center', color: '#434343' }}>{ML("BIZ_KIMIZ")}</i>
                <i style={{ fontWeight: 'regular', fontSize: '20px', position: 'absolute', left: 330, marginTop: '100px', textAlign: 'center' }}>{ML("Biz_INTERTECH_şirketinde_2022_yılı_Ağustos_dönemi_stajyerlerinden")}</i>
                <i style={{ fontWeight: 'regular', fontSize: '20px', position: 'absolute', left: 430, marginTop: '130px', textAlign: 'center' }}>{ML("Takım_2yiz_Ve_sizinle_de_aynı_takımdayız")}</i>
                <i style={{ fontWeight: 'bold', fontSize: '20px', position: 'absolute', left: 540, marginTop: '170px', color: '#434343' }}>{ML("Takım_üyeleri")}</i>
                <i style={{ fontWeight: 'bold', fontSize: '20px', position: 'absolute', left: 500, marginTop: '210px', textAlign: 'center' }}>
                  {ML(" Anil_Çetin")}
                  <br />
                  {ML("Çağdaş_Çapuk")}
                  <br />
                  {ML("Elif_Ezgi_İzgin")}<br />
                  {ML("Emine_Çiğ")}<br />
                  {ML("Hasan_Yiğit_Kaya")}<br />
                  {ML("Irmak_Özügüzel")}<br />
                  {ML("Mustafa_Sergen_Haysal")}<br />
                  {ML("Sezgin_Kale")}<br />
                  {ML("Zeynep_Özer")}
                </i>
                <i style={{ fontWeight: 'regular', fontSize: '20px', position: 'absolute', left: 300, marginTop: '520px', textAlign: 'center' }}>{ML("Product_Owner")}<br/>
                {ML("destekleri_için_çok_teşekkür_ederiz.")}</i>

              <Image style={{ position: 'absolute', left: 30, top: 800 }} width={200} src="./logo1.png" />
              <i style={{ fontWeight: 'bold', fontSize: '60px', top: 850, position: 'absolute', left: 300, color: '#13C2C2' }}>{ML("CryptoBox")}</i>
              <Image style={{ position: 'absolute', left: 500, top: 820 }} width={350} src="https://www.intertech.com.tr/wp-content/uploads/2017/12/intertech_web_logo.png" />
              <Avatar style={{ position: 'absolute', left: 620, top: 850, width: 70, height: 100 }} src='./x.png' />

            </Card.Grid>

          </Content>

          <Content style={{
            background: "white",
            padding: 590,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>


            <circle style={{
              position: 'absolute', right: 300, top: 1400, display: 'flex', width: '800px',
              height: '800px', backgroundColor: '#87E8DE', borderRadius: '1400%', borderColor: 'orange'
            }} />

            <circle style={{
              position: 'absolute', left: 400, top: 1400, display: 'flex', width: '800px',
              height: '800px', backgroundColor: '#87E8DE', borderRadius: '1400%', borderColor: 'orange'
            }} />

            <i style={{ fontWeight: 'bold', fontSize: '60px', position: 'absolute', right: 520, top: 1580, textAlign: 'center', color: '#FA8C16' }}>{ML("Misyonumuz")}</i>
            <i style={{ fontWeight: 'bold', fontSize: '35px', position: 'absolute', right: 490, top: 1700, textAlign: 'center', color: '000000', }}>{ML("Kullanıcı_dostu_ve_güvenilir")}<br />
              {ML("ürünümüzle")}<br />
              {ML("ailelerin_çocukları_için")}<br />
              {ML("birikim_yapmalarına")} <br />
              {ML("destek_olmak")}
            </i>

            <i style={{ fontWeight: 'bold', fontSize: '60px', position: 'absolute', left: 640, top: 1580, textAlign: 'center', color: '#FA8C16' }}>{ML("Vizyonumuz")}</i>
            <i style={{ fontWeight: 'bold', fontSize: '35px', position: 'absolute', left: 540, top: 1700, textAlign: 'center', color: '000000', }}>{ML("Aileler için")} <br />
              {ML("Ethereum_kripto_para_birimiyle")}<br />
              {ML("ürünler_içerisinde")} <br />
              {ML("birikim_yapmalarına")} <br />
              {ML("1_Numara_olmak")}
            </i>



          </Content>



          <Footer style={{ background: "white", padding: 60, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
            <h2 style={{ position: 'absolute', right: 1000, }}> {ML("2022_Intertech_Inc_Her_hakkı _saklıdır")}</h2>.
          </Footer>
        </Layout>
      </Layout>
      </div >
    )

  }

}
export default About; 