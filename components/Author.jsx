import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import styles from '../styles/author.module.css';

export default function Author() {
  return (
    <div className='comm-box'>
      <div className={styles.author + ' comm-box'}>
        <Avatar size={100} src='/avatar.jpg' />
      </div>
      <div className={styles.author}>
        introduction introduction introduction introduction
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className={styles.account} />
        <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
        <Avatar size={28} icon={<WechatOutlined />} className={styles.account} />
      </div>
    </div>
  );
}
