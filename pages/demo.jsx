import Main from '../components/Main';
import Image from 'next/image';
import bytedance from '../public/bytedance.svg';
import { Button, Row } from 'antd';
import { Fragment } from 'react';
const SVGDemo = (props) => {
  function handleClick() {
    const svg = document.getElementById('svg');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d'); // 获取2d图像绘制功能
    let width = svg.clientWidth;
    let height = svg.clientHeight;
    let [x, y] = [0, 0];
    for (let i = 1; i <= 5; i++) {
      ctx.drawImage(svg, x, y, width, height); // svg图像绘制必须指定大小
      y += height + 2;
      width *= 2;
      height *= 2;
    }
  }
  return (
    <Fragment>
      <Row type='flex' justify='center'>
        <Image src={bytedance} alt='' id='svg' />
      </Row>
      <Row>
        <Button onClick={handleClick}>Click</Button>
      </Row>
      <Row>
        <canvas id='canvas' width='500' height='1000'></canvas>
      </Row>
    </Fragment>
  );
};

const demo = (props) => {
  return <Main title='Demo' left={<SVGDemo />} />;
};
export default demo;
