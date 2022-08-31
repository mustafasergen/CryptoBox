
import { Layout, Avatar, Menu, MenuProps, Card, Table } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import { BellOutlined, ExportOutlined, SearchOutlined, SendOutlined, TeamOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined, WalletOutlined } from '@ant-design/icons';
import { WalletService } from '../services/wallet-service';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Child } from '../services/contract-service';
import { ML } from '../i18n.config';
import LanguageComponent from './language.component';


const { Header, Footer, Sider, Content } = Layout;



const endpoint = "https://api-rinkeby.etherscan.io/api"
const ETHERSCAN_API_KEY = "FMS8JYNTIQF7HBFM6G34P6SK52W6JQZKSM"
const CONTRACT_ADDRESS = "0xdA0ACe7006Ad5B36F2CdFF13276C95FBCB4D53C8";
const deneme = "0x302955b74C969aA09bb270DAa775B65Fc9b7Bc29"

function AfterSignupParent() {



  window.scrollTo(0, 0)


  const [kullanıcıName, setName] = useState("");
  const [kullanıcıNameChild, setChildName] = useState("");
  const [translaction, setTrans] = useState<Child[]>([]);
  



  const navigate = useNavigate();
  useEffect(() => {
    WalletService.connect().then(() => {
      WalletService.contract.getRole().then(async (role: string) => {

        if (role == 'Unregistered' || role == 'Child') {
          navigate('/signin')
          console.log('kayıtlıdegil')

        } else if (role == 'Parent') {
          const parent = await WalletService.contract.getParent();
          setName(parent.name);
          console.log(parent.name)
          const child = await WalletService.contract.getChildrenList();
        }

        const etherscan = await axios.get(endpoint + `?module=account&action=txlist&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETHERSCAN_API_KEY}`)
        let context = etherscan.data.result;
        for (let i = 0; i < context.length; i++) {
          if (context[i].to === CONTRACT_ADDRESS) {
            console.log(context[i].to)
          }
        }
        setTrans(context);
      })

    })
  }, []);

  
  const dataSource = [translaction];
  const columns = [
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("KIME")}</h2>,
      dataIndex: "to",
      key: "name",
    },
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("TUTAR")}</h2>,
      dataIndex: "value",
      key: "amount",

    },
    {
      title: <h2 style={{ color: "#13C2C2", fontWeight: "bold" }}>{ML("ISLEM")}</h2>,
      dataIndex: "functionName",
      key: "address",
    },
  ];







  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
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
    getItem(<Link to="/after_signup_parent"><h2 style={{ fontSize: '28px', color: 'black', textAlign: 'center', marginTop: '15px' }}>My CryptoBox</h2></Link>, '1', <WalletOutlined style={{ position: 'absolute', marginTop: '6px', fontSize: '35px' }} />),
    getItem(<Link to="/children"><h2 style={{ fontSize: '28px', color: 'black', textAlign: 'center', marginTop: '15px' }}>{ML("COCUKLARIM")}</h2></Link>, '2', <TeamOutlined style={{ position: 'absolute', marginTop: '6px', fontSize: '35px' }} />),
    getItem(<Link to="/signin"><h2 style={{ fontSize: '28px', color: 'black', textAlign: 'center', marginTop: '15px' }}>{ML("OTURUM_DEGISTIRME")}</h2></Link>, '3', <ExportOutlined style={{ position: 'absolute', marginTop: '6px', fontSize: '35px' }} />),


  ];


  return (
    <div>

      <Layout>
        <Header style={{ background: "white", padding: 50, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>

          <Link to="/"><Image style={{ position: 'absolute', left: 30, top: -65 }} width={100} src="./logo1.png" /></Link>

          <Button style={{ position: 'absolute', left: 190, top: 15, color: '#13C2C2', fontWeight: 'bold', fontSize: '35px' }}

            type="link" danger><Link to="/">CryptoBox</Link></Button>

          <TeamOutlined style={{ position: 'absolute', right: 250, top: 40, color: '#13C2C2', borderBlockColor: '#13C2C2', fontSize: '30px' }} />

          <LanguageComponent/>

        </Header>
        <Layout>

          <Sider style={{ padding: 200, backgroundColor: '#13C2C2' }}>

            <Menu
              style={{ position: 'absolute', left: 0, top: 50, backgroundColor: '#13C2C2' }}
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              items={items}
            />
          </Sider>


          <Content style={{
            background: "white",
            padding: 580,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>

            <h2 style={{ fontWeight: 'bold', position: 'absolute', left: 450, top: 130, color: '#13C2C2', fontSize: '35px' }}>{ML("HOS_GELDIN")}</h2>
            <h2 style={{ position: 'absolute', left: 670, top: 130, fontWeight: 'bold', color: '#13C2C2', fontSize: '35px' }}>{kullanıcıName}</h2>
            <h2 style={{ position: 'absolute', left: 670, top: 130, fontWeight: 'bold', color: '#13C2C2', fontSize: '35px' }}>{kullanıcıNameChild}</h2>

            <Link to='/sendETH'><h2 style={{ position: 'absolute', left: 1250, top: 450, color: '#13C2C2', fontSize: '20px' }}>{ML("PARA_GONDERME")}</h2></Link>
            <Link to='/sendETH'><SendOutlined style={{ position: 'absolute', left: 1300, top: 400, color: '#13C2C2', fontSize: '45px' }} /></Link>

            <Link to='/takeETH'><h2 style={{ position: 'absolute', left: 1100, top: 450, color: '#13C2C2', fontSize: '20px' }}>{ML("PARA_CEK")}</h2></Link>
            <Link to='/takeETH'><VerticalAlignTopOutlined style={{ position: 'absolute', left: 1130, top: 400, color: '#13C2C2', fontSize: '45px' }} /></Link>


            <h2 style={{fontWeight:'bold',position:'absolute', left:850,top:500,color:'#13C2C2',fontSize:'30px'}}>{ML('HESAP_HAREKETLERI')}</h2>
            <Table
              style={{
                position: "absolute",
                left: 850,
                top: 550,
                width: "900px",
              }}
              dataSource={translaction}
              columns={columns}
            />

          </Content>
        </Layout>
        <Footer style={{ background: "white", padding: 60, boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)' }}>
          <h2 style={{ position: 'absolute', right: 1000, top: 1300 }}>{ML("2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR")}</h2>
        </Footer>

      </Layout>
    </div>

  )



}
export default AfterSignupParent;


