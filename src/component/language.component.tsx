import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import i18next from "i18next";
import { languages, ML } from "../i18n.config";

export interface LanguageProps {

}

export default function LanguageComponent(props: LanguageProps) {
  const menu = (

    <Menu>
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
      <div style={{
      position: "absolute", display: 'block', width: 5, padding: 0, color: "#87E8DE"
      }}>
      </div>
        <Space>
          Languages
          <DownOutlined />
        </Space>
        

      </a>
    </Dropdown>
  </>
} 