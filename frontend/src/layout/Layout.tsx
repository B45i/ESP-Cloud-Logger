import { useState } from 'react';
import {
    BarChartOutlined,
    UserOutlined,
    WifiOutlined,
} from '@ant-design/icons';

import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const PageLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout className="page-layout">
            <Header className="page-header">ESP Data Logger</Header>
            <Layout>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                >
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                    >
                        <Item key="1" icon={<WifiOutlined />}>
                            Devices
                        </Item>

                        <Item key="2" icon={<BarChartOutlined />}>
                            Data
                        </Item>

                        <SubMenu
                            key="user"
                            icon={<UserOutlined />}
                            title="User"
                        >
                            <Menu.Item key="3">Login</Menu.Item>
                            <Menu.Item key="4">Logout</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}></Content>
                    <Footer className="page-footer">B45i</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default PageLayout;
