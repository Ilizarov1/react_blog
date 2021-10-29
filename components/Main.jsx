import Head from 'next/head';
import { Row, Col } from 'antd';
import Header from './Header/Header';
import Avatar from './Author';
import Footer from './Footer';
export default function Main(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          {props.left}
        </Col>

        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Avatar />
          {props.right}
        </Col>
      </Row>
      <Footer />
    </>
  );
}
