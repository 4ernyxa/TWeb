import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menushka from './components/Menushka';
import Cards from './components/Cards'

import { Layout, Menu } from 'antd';


const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Products</Menu.Item>
                <Menu.Item key="3">Support</Menu.Item>
                <Menu.Item key="4">Cart</Menu.Item>
            </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Menushka/>
                <Cards/>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TW LABS ©2022 Created by Ursatii Vladimir CR-193</Footer>
      </Layout>
    </div>
  );
}

export default App;
