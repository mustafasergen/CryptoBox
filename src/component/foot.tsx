import React, { Component } from 'react'
import { Layout, Avatar } from 'antd'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
import { ML } from '../i18n.config'
import LanguageComponent from './language.component'

const { Footer } = Layout

const Foot: React.FC = () => (
  <>
    <Layout>
      <Footer
        style={{
          background: 'white',
          padding: 60,
          boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.7)',
        }}
      >
        <h2 style={{marginLeft: "900px"}}>
          {ML('2022_INTERTECH_INC_HER_HAKKI_SAKLIDIR')}
        </h2>
        
      </Footer>
    </Layout>
  </>
)

export default Foot
