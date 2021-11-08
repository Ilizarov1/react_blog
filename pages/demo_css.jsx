import Main from '../components/Main';
import React, { useEffect } from 'react';
import { Button, Row, Slider, Col } from 'antd';
import { Bytedance } from '@icon-park/svg';
import { Fragment } from 'react';

const SVG_CssDemo = (props) => {
  const svg = Bytedance({ theme: 'outline' }); // 获得纯字符串的svg
  const showRef = React.createRef();

  /**
   *
   * @param {string} str svg字符串
   * @returns XML
   */
  function str2svg(str) {
    return new DOMParser().parseFromString(str, 'text/xml');
  }

  function setConfig(config, svgNode) {
    const {
      size = '1em',
      strokeWidth = '4',
      strokeLinejoin = 'round',
      stroke = '#333'
    } = config || {};
    if (svgNode == null) return;
    console.log(size);
    svgNode.setAttribute('width', size);
    svgNode.setAttribute('height', size);
    for (const child of svgNode.childNodes) {
      child.setAttribute('stroke-width', strokeWidth);
      child.setAttribute('stroke-linejoin', strokeLinejoin);
      child.setAttribute('stroke', stroke);
    }
  }

  useEffect(() => {
    const svgNode = str2svg(svg).documentElement;
    setConfig({ siez: '2em', strokeLinejoin: 'miter', stroke: '#666' }, svgNode);
    showRef.current.appendChild(svgNode); // 添加svg元素
    // console.log(showRef.current);
  });
  return (
    <Fragment>
      <Row>
        <Button onClick={str2svg}>click</Button>
      </Row>
      <Row>
        <div style={{ fontSize: '32px' }} ref={showRef}></div>
        <svg
          width='32'
          height='32'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5 7L10 9V37L5 39V7Z'
            fill='none'
            stroke='#333'
            strokeWidth='4'
            strokeLinejoin='round'
          />
          <path
            d='M16 23L21 25V37L16 39V23Z'
            fill='none'
            stroke='#333'
            strokeWidth='4'
            strokeLinejoin='round'
          />
          <path
            d='M27 21L32 19V35L27 33V21Z'
            fill='none'
            stroke='#333'
            strokeWidth='4'
            strokeLinejoin='round'
          />
          <path
            d='M38 9L43 11V37L38 39V9Z'
            fill='none'
            stroke='#333'
            strokeWidth='4'
            strokeLinejoin='round'
          />
        </svg>
      </Row>
    </Fragment>
  );
};

const demo_css = (props) => {
  return <Main title='Demo_css' left={<SVG_CssDemo />} />;
};
export default demo_css;
