import Main from '../components/Main';
import React from 'react';
import bytedance from '../public/bytedance.svg';
import { Button, Row, Slider, Col } from 'antd';
import { Fragment } from 'react';
const SVGDemo = (props) => {
  const canvasRef = React.createRef();
  const imgRef = React.createRef();
  const svgRef = React.createRef();
  /**
   * 使用drawImage直接绘制
   * @param {number} multi 缩放倍数
   * @returns 绘制函数
   */
  function handleDraw(multi) {
    return () => {
      const svgImg = imgRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d'); // 获取2d图像绘制功能
      let width = svgImg.clientWidth * multi;
      let height = svgImg.clientHeight * multi;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(svgImg, 0, 0, width, height);
    };
  }
  /**
   * 把canvas转成png实现下载
   */
  function handle2PNG() {
    const canvas = canvasRef.current;
    const data = canvas.toDataURL('image/png', 1); // 类型,图片质量
    const a = document.createElement('a'); // 创建下载链接
    a.href = data;
    a.download = 'svgDemo.png';
    a.click();
  }
  /**
   * 保存为png，原理是动态创建canvas标签，利用toDataURL()创建下载链接
   * @param {object} src image
   * @param {number} width image.width
   * @param {number} height image.height
   */

  function convertToPng(src, width, height) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.drawImage(src, 0, 0);

    const png = canvas.toDataURL('image/png', 1);
    return Promise.resolve(png);
    // const a = document.createElement('a');
    // a.href = data;
    // a.download = 'saveAsPng';
    // a.click();
  }

  function saveAsPng(uri) {}
  /**
   * @param {number} val 滑块获得的放大倍数
   */
  function handleSlider(val) {
    handleDraw(val)();
  }

  /**
   * 使用Path2D API绘制SVG Paths
   */
  function handleSVGPaths() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pureSvg = svgRef.current;
    const paths = pureSvg.childNodes;
    ctx.clearRect(0, 0, 48, 48);
    ctx.scale(2 / 3, 2 / 3); // 不知道为什么画出来是48*48而不是32*32
    for (const p of paths) {
      const d = p.getAttribute('d');
      const stroke = p.getAttribute('stroke');
      const strokeWidth = p.getAttribute('stroke-width');
      const strokeLinejoin = p.getAttribute('stroke-linejoin'); // 获取各种属性
      const p2d = new Path2D(d); // 创建svg path
      ctx.strokStyle = stroke; // 设置颜色宽度连接方式等
      ctx.lineWidth = (Number(strokeWidth) * 2) / 3;
      ctx.lineJoin = strokeLinejoin;
      ctx.stroke(p2d); // 绘制
    }
  }

  function handleSvg2Str() {
    const s = new XMLSerializer();
    const str = s.serializeToString(svgRef.current);
    console.log(str);
  }
  return (
    <Fragment>
      <Row>
        <embed src='/bytedance.svg' type='image/svg+xml' />
        <img ref={imgRef} src='/bytedance.svg' alt='' />
        <svg ref={svgRef} width='32' height='32' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M5 7L10 9V37L5 39V7Z' fill='none' stroke='#333' strokeWidth='4' strokeLinejoin='round' />
          <path d='M16 23L21 25V37L16 39V23Z' fill='none' stroke='#333' strokeWidth='4' strokeLinejoin='round' />
          <path d='M27 21L32 19V35L27 33V21Z' fill='none' stroke='#333' strokeWidth='4' strokeLinejoin='round' />
          <path d='M38 9L43 11V37L38 39V9Z' fill='none' stroke='#333' strokeWidth='4' strokeLinejoin='round' />
        </svg>
      </Row>
      <Row>
        <Col span={12}>
          <Button onClick={handleDraw(1)}>Draw</Button>
          <Button onClick={handle2PNG}>toPNG</Button>
          <Button onClick={handleSVGPaths}>Path2D</Button>
          <Button onClick={handleSvg2Str}>toStr</Button>
        </Col>
        <Col span={12}>
          <Slider onChange={handleSlider} min={1} max={10} defaultValue={1} />
        </Col>
      </Row>
      <Row>
        <canvas ref={canvasRef} id='canvas' width='48' height='48'></canvas>
      </Row>
    </Fragment>
  );
};

const demo = (props) => {
  return <Main title='Demo' left={<SVGDemo />} />;
};
export default demo;
