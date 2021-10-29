import Head from 'next/head';
import React, { useState } from 'react';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import ReactMarkdown from 'react-markdown';
import {} from '@ant-design/icons';
import Header from '../components/Header/Header';
import Avatar from '../components/Author';
import Footer from '../components/footer';
import styles from '../styles/index.module.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
export default function Detailed() {
  const markdown =
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !\n' +
    '# hello *world* !';
  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href='/'>首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>列表</Breadcrumb.Item>
            <Breadcrumb.Item>*具体文章*</Breadcrumb.Item>
          </Breadcrumb>
          <div className='content'>
            <ReactMarkdown children={markdown} />
          </div>
        </Col>

        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Avatar />
          <Affix offsetTop={5}>
            <div className='comm-box'>
              <div className='title'>目录</div>
              <MarkNav className='article-menu' source={markdown} ordered={false} />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
