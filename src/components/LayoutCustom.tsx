import { Layout, Menu, Breadcrumb } from 'antd';
import './Layout.css';

import { useLocalStorage } from "../index";
import {observer} from "mobx-react-lite";
import Inher from "../interfaces/inherit";

const { Header, Content} = Layout;

export const LayoutCustom = observer(() =>{
    const { content } = useLocalStorage()
    return(
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Inher></Inher>
                </Content>
            </Layout>,
        </>
    )
})