import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';

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
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
