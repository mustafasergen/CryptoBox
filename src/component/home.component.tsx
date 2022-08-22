import React, { Component } from 'react';

import { Layout, Avatar, Dropdown, Space, Menu } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, DownOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import i18next, { t } from 'i18next';
import { languages, ML } from '../i18n.config';
import LanguageComponent from './language.component';



const { Header, Footer, Content } = Layout;


class Hakkımda extends Component {
  render() {



    window.scrollTo(0, 0)
    return (
      <div>

        <Layout>
          <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
            <Avatar style={{ position: 'absolute', right: 100, top: 35, }} src='./coin2.png' />


            <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

            <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

              type="link" danger><Link to="/">CryptoBox</Link></Button>

            <Button style={{ position: 'absolute', right: 530, top: 25, color: '#13C2C2', fontWeight: 'bold', fontSize: '25px' }}

              type="link" danger><Link to="/meta_mask">{ML("METAMASK_NEDIR")} </Link></Button>

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
              <h2 style={{ position: 'absolute', left: 150, color: "#434343", top: 280, fontWeight: 'bold', fontSize: '40px', fontFamily: 'Verdana' }}><text>{ML("YATIRIMINIZ")}<br />
              {ML("ÇOCUĞUNUZLA_BERABER_BÜYÜSÜN")}
              </text></h2>
              <h2 style={{ position: 'absolute', left: 150, color: "#434343", top: 420, fontSize: '25px', fontWeight: 'Regular', fontFamily: 'Verdana' }}><text>{ML("Bebeğinizin_size_doğru_attığı_ilk_adımlar_gibi_siz_de_onun")}<br />
              {ML("geleceği için biriktirmeye ilk adımı atın! Çocuğunuz için")}<br />
              {ML("açacağınız hesapla onun için kripto para biriktirebilirsiniz.")}<br /><br />
              {ML("Eğer")}
              </text></h2>

              <h2 style={{ position: 'absolute', left: 200, color: "#434343", top: 700, fontSize: '30px', fontWeight: 'Regular', fontFamily: 'Verdana' }}><text>{ML("MetaMask_hesabınız_varsa")}</text></h2>
              <h2 style={{ position: 'absolute', left: 200, color: "#434343", top: 850, fontSize: '30px', fontWeight: 'Regular', fontFamily: 'Verdana' }}><text>{ML("Ethereum_Networkünde_ise")}</text></h2>
              <h2 style={{ position: 'absolute', left: 200, color: "#434343", top: 1000, fontSize: '30px', fontWeight: 'Regular', fontFamily: 'Verdana' }}><text>{ML("Bir_miktar_Ethereum’unuzvarsa")}</text></h2>

              <Avatar style={{ position: 'absolute', left: 1400, top: 200, width: '850px', height: '850px' }} src='./circle1.png' />
              <Image style={{ position: 'absolute', left: 800, top: -500 }} width={500} src="./anne1.png" />
              <Image style={{ position: 'absolute', left: 700, top: -150 }} width={500} src="./anne2.png" />




              <CheckCircleOutlined style={{ position: 'absolute', left: 80, color: "#87E8DE", top: 680, fontSize: '90px' }} />
              <CheckCircleOutlined style={{ position: 'absolute', left: 80, color: "#87E8DE", top: 830, fontSize: '90px' }} />
              <CheckCircleOutlined style={{ position: 'absolute', left: 80, color: "#87E8DE", top: 980, fontSize: '90px' }} />


              <Link to="/signup"><Button style={{ position: 'absolute', left: 270, top: 1100, width: '280', height: '80px', color: 'white', fontWeight: 'bold', fontSize: '30px', backgroundColor: '#13C2C2', borderColor: '#13C2C2' }}

                type="primary">{ML("Hemen_Başlayın")}</Button></Link>

            </Content>

            <Content style={{
              background: "white",
              padding: 700,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>


              <h2 style={{ position: 'absolute', left: 790, color: "orange", top: 1410, fontWeight: 'bold', fontSize: '43px', fontFamily: 'Verdana', textAlign: 'center', zIndex: 1 }}><text>{ML("ÇOCUĞUNUZUN GELECEĞİ İÇİN")}<br /> {ML("ŞİMDİ YATIRIM YAPIN")}</text></h2><br />
              <Image style={{ position: 'absolute', left: -120, top: -680, zIndex: 0 }} width={1200} src="./computer1.png" />

              <CheckCircleOutlined style={{ position: 'absolute', left: 910, color: "#87E8DE", top: 2400, fontSize: '70px' }} />
              <br />
              <h2 style={{ position: 'absolute', left: 1000, color: "#434343", top: 2400, fontWeight: 'bold', fontSize: '40px', fontFamily: 'Verdana', zIndex: 1 }}><text>{ML("KAYIT_OL")}</text></h2><br />
              <h2 style={{ position: 'absolute', left: 850, color: "#434343", top: 2480, fontSize: '25px', fontFamily: 'Verdana', zIndex: 1 }}><text>{ML("Web sitemizden saniyeler içinde hesabını oluştur")}</text></h2>

            </Content>
            <Content style={{
              background: "white",
              padding: 700,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>

              <Image style={{ position: 'absolute', left: -120, top: -1000, zIndex: 0 }} width={1200} src="./computer1.png" />

              <CheckCircleOutlined style={{ position: 'absolute', left: 800, color: "#87E8DE", top: 3550, fontSize: '70px' }} />
              <br />
              <h2 style={{ position: 'absolute', left: 900, color: "#434343", top: 3550, fontWeight: 'bold', fontSize: '40px', fontFamily: 'Verdana' }}><text>{ML("Yatırım Yapmaya Başlayın")}</text></h2><br />
              <h2 style={{ position: 'absolute', left: 730, color: "#434343", top: 3630, fontSize: '25px', fontFamily: 'Verdana', textAlign: 'center', zIndex: 1 }}><text>{ML("En güvenilir kripto para birimlerinden olan Ethereum ile birikiminiz")}
                <br />{ML("size_kazandırmaya_başlasın")}</text></h2>

            </Content>
            <Content style={{
              background: "white",
              padding: 700,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>

              <Image style={{ position: 'absolute', left: -120, top: -1300, zIndex: 0 }} width={1200} src="./computer1.png" />

              <CheckCircleOutlined style={{ position: 'absolute', left: 900, color: "#87E8DE", top: 4730, fontSize: '70px' }} />
              <br />
              <h2 style={{ position: 'absolute', left: 1000, color: "#434343", top: 4730, fontWeight: 'bold', fontSize: '40px', fontFamily: 'Verdana' }}><text>{ML("Birikiminiz_Büyüsün")}</text></h2><br />
              <h2 style={{ position: 'absolute', left: 740, color: "#434343", top: 4810, fontSize: '25px', fontFamily: 'Verdana', textAlign: 'center' }}><text>{ML("Aileler_için_birikim yapmayı_kolay_ve_eğlenceli_hale_getiren_CryptoBox_ile")}<br />
              {ML("çocuğunuz_için_birikim_yapın")}</text></h2>
            </Content>
            <Content style={{
              background: "white",
              padding: 200,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>

              <h2 style={{ position: 'absolute', left: 950, color: "orange", top: 5050, fontWeight: 'bold', fontSize: '43px', fontFamily: 'Verdana', textAlign: 'center', zIndex: 1 }}><text>{ML("NEDEN_CRYPTOBOX")}</text></h2><br />

              <Image style={{ position: 'absolute', right: -1400, top: -800, zIndex: 0 }} width={700} src="./kumbara1.png" />
              <Image style={{ position: 'absolute', right: -700, top: -300, zIndex: 0 }} width={700} src="./kumbara2.png" />
            </Content>

            <Footer style={{ background: "white", padding: 60, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
              <h2 style={{ position: 'absolute', right: 1000, }}>{ML("2022_Intertech_Inc_Her_hakkı _saklıdır")}</h2>.
            </Footer>
          </Layout>
        </Layout>
      </div>

    )

  }

}
export default Hakkımda; 