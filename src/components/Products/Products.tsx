import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Footer from '../Footer/Footer.tsx';
import { Button, Layout, Menu, theme, Card, Col, Row} from 'antd';

interface IProduct {
  id: string;
  title: string;
  description: string;
}

const { Header, Sider, Content } = Layout;
const ProductsPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const ProductsFooter = {
    copyright: '© 2026. Продукты на выбор.'
  }

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => setProducts(data.products));
  }, [])

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Row gutter={16}>
              {products.map((product) => {
                return (
                  <Col span={8} key={product.id}>
                    <Card 
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        draggable={false}
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                    }>
                      Card content
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Content>
        </Layout>
      </Layout>
      <Footer info={ProductsFooter} />
    </>
  );
};

export default ProductsPage;