import React from 'react';
import Link from 'next/link';
import style from './Header.module.css';
import { HomeOutlined, YoutubeOutlined, FileTextOutlined } from '@ant-design/icons';
import { Row, Col, Menu } from 'antd';

const Header = () => (
  <div className={style.header}>
    <Row type='flex' justify='center'>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className={style['header-logo']}>Jnz</span>
        <span className={style['header-txt']}>练练手</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu className={style.menuItem} mode='horizontal'>
          <Menu.Item key='home'>
            <HomeOutlined />
            <Link href='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key='video'>
            <YoutubeOutlined />
            <Link href='/list'>列表</Link>
          </Menu.Item>
          <Menu.Item key='article'>
            <FileTextOutlined />
            <Link href='/detailed'>文章</Link>
          </Menu.Item>
          <Menu.Item key='demo'>
            <FileTextOutlined />
            <Link href='/demo'>Demo</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
