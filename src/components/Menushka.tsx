import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Menushka() {
    return(
        <Menu style={{width: 256}} mode="vertical">
            <SubMenu key="sub1" icon={<MailOutlined />} title="Messages">
                <Menu.Item key="1">Incoming</Menu.Item>
                <Menu.Item key="2">Outgoing</Menu.Item>
                <Menu.Item key="3">Spam</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Applications">
                <Menu.Item key="4">News</Menu.Item>
                <Menu.Item key="5">Forum</Menu.Item>
                <Menu.Item key="6">Friends</Menu.Item>
                <SubMenu key="sub3" title="Games">
                    <Menu.Item key="7">My</Menu.Item>
                    <Menu.Item key="8">New</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Setings">
                <Menu.Item key="9">Avatar</Menu.Item>
                <Menu.Item key="10">Name</Menu.Item>
                <Menu.Item key="11">Address</Menu.Item>
                <Menu.Item key="12">About</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Menushka;
