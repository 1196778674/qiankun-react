import React,{FC, useState,useCallback} from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Index: FC = ({children}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggleFun = useCallback(() => {
        setCollapsed(!collapsed)
    },[setCollapsed, collapsed])
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to={'/'}>首页</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to={'/page'}>当前界面路由</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                <Link to={'/qiankun'}>微前端界面路由</Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggleFun,
                })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                {children}
            </Content>
            </Layout>
        </Layout>
    )
}

export default Index