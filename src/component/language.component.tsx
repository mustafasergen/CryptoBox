import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import i18next from "i18next";
import { languages, ML } from "../i18n.config";

export interface LanguageProps {

}

export default function LanguageComponent(props: LanguageProps) {
  const menu = (

    <Menu style={{left: 2100, top:3}}>
      {languages.map(({ code, name, country_code }) => {
        return <Menu.Item key={country_code} onClick={(info) => {
          i18next.changeLanguage(code).then(() => window.location.reload())
        }}>
          {name}
        </Menu.Item>
      })}
    </Menu>
  );
  return <>
    <Dropdown overlay={menu}>
      
      <a onClick={e => e.preventDefault()}>
      <Button style={{ position: 'absolute', left: 2250, top: 30, width: '280', height: '30px', color: 'white', fontWeight: 'bold', fontSize: '15px', backgroundColor: '#13C2C2', borderColor: '#13C2C2' }}

                type="primary">
        <Space>
          {ML("LANGUAGES")}
          <DownOutlined />
        </Space>
        
        </Button>
      </a>
    </Dropdown>
  </>
}