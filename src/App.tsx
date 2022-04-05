import React from 'react';
import logo from './logo.svg';
import './App.css';

import {menu} from '/components/menu.tsx';

import { Layout, Menu } from 'antd';


const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Ursatii Vladimir Cr-193*/}
      {/*  </p>*/}
      {/*</header>*/}
        <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                })}
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Content
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
