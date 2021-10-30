import React from 'react';
import { Breadcrumb, Affix } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/detailed.module.css';
import Main from '../components/Main';
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
      <Main
        title='Detail'
        left={
          <>
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
          </>
        }
        right={
          <Affix offsetTop={5}>
            <div className='comm-box'>
              <div className={styles.title}>目录</div>
              <MarkNav source={markdown} ordered={false} />
            </div>
          </Affix>
        }
      />
    </>
  );
}
