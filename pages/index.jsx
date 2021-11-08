import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import Main from '../components/Main';
import styles from '../styles/index.module.css';
import Link from 'next/link';
export default function Home() {
  useEffect(() => {});
  const [mylist, setMylist] = useState([
    {
      title: 'Demo1',
      context: '简单绘制和简单转换svg',
      href: '/demo'
    },
    {
      title: 'Demo2',
      context: '尝试带css的svg',
      href: '/demo_css'
    }
  ]);
  return (
    <>
      <Main
        title='Home'
        left={
          <List
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className={styles['list-title']}>
                  <Link href={item.href}>{item.title}</Link>
                </div>
                <div className={styles['list-icon']}>
                  <span>2021 - 10 - 22</span>
                  <span>随便写的</span>
                  <span>有点菜</span>
                </div>
                <div className={styles['list-context']}>{item.context}</div>
              </List.Item>
            )}
          />
        }
      />
    </>
  );
}
