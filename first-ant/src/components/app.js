import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

class App extends Component {
  state = {};
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" style={{ width: '3em' }}></div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">应用监控</Menu.Item>
              <Menu.Item key="2">业务监控</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1">
                  <Icon type="mail" />
                  监控概览
                </Menu.Item>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      全文检索
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  {/* <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item> */}
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Menu
                style={{ margin: '16px 0' }}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="watch">
                  <Icon type="mail" />
                  错误监控
                </Menu.Item>
                <Menu.Item key="count">
                  <Icon type="appstore" />
                  每日统计
                </Menu.Item>
              </Menu>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                <Breadcrumb.Item>当前</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>   */}
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            ©2019 Created by ShouriYang
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
