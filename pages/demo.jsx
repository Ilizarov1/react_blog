import Main from '../components/Main';
import Image from 'next/image';
import bytedance from '../public/bytedance.svg';
import { Button, Row, Slider, Col } from 'antd';
import { Fragment } from 'react';
const SVGDemo = (props) => {
  /**
   *
   * @param {number} multi 缩放倍数
   * @returns 绘制函数
   */
  function handleDraw(multi) {
    return () => {
      const svg = document.getElementById('svg');
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d'); // 获取2d图像绘制功能
      let width = svg.clientWidth * multi;
      let height = svg.clientHeight * multi;
      canvas.setAttribute('width', String(width));
      canvas.setAttribute('height', String(height));
      ctx.drawImage(svg, 0, 0, width, height);
    };
  }
  /**
   * 把canvas转成png实现下载
   */
  function handle2PNG() {
    const canvas = document.getElementById('canvas');
    const data = canvas.toDataURL('image/png', 1); // 类型,图片质量
    const a = document.createElement('a'); // 创建下载链接
    a.href = data;
    a.download = 'svgDemo.png';
    a.click();
  }
  /**
   * @param {number} val 滑块获得的放大倍数
   */
  function handleSlider(val) {
    handleDraw(val)();
  }
  return (
    <Fragment>
      <Row>
        <Image src={bytedance} alt='' id='svg' />
      </Row>
      <Row>
        <Col span={12}>
          <Button onClick={handleDraw(1)}>Draw</Button>
          <Button onClick={handle2PNG}>toPNG</Button>
        </Col>
        <Col span={12}>
          <Slider onChange={handleSlider} min={1} max={10} defaultValue={1} />
        </Col>
      </Row>
      <Row>
        <canvas id='canvas'></canvas>
      </Row>
    </Fragment>
  );
};

const demo = (props) => {
  return <Main title='Demo' left={<SVGDemo />} />;
};
export default demo;
