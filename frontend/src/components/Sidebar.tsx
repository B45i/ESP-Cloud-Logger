import { useState } from 'react';
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Item key="1" icon={<i className="fa-solid fa-microchip"></i>}>
                    Devices
                </Item>

                <Item key="2" icon={<i className="fa-solid fa-chart-line"></i>}>
                    Data
                </Item>

                <SubMenu
                    key="user"
                    icon={<i className="fa-solid fa-user"></i>}
                    title="User"
                >
                    <Menu.Item key="3">Login</Menu.Item>
                    <Menu.Item key="4">Logout</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
