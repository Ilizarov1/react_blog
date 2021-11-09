import Main from '../components/Main';
import React, { useEffect } from 'react';
import { Button, Row, Slider, Col, Input, Select } from 'antd';
import { Bytedance } from '@icon-park/svg';
import { Fragment } from 'react';

const SVG_CssDemo = (props) => {
  const svg = Bytedance({ theme: 'outline' }); // 获得纯字符串的svg
  const showRef = React.createRef();
  const { Option } = Select;
  const config = {};
  /**
   * 把SVG字符串转换为XML
   * @param {string} str svg字符串
   * @returns XML
   */
  function str2svg(str) {
    return new DOMParser().parseFromString(str, 'text/xml');
  }

  /**
   * 修改svg元素的属性
   * @param {object} config svg设置
   * @param {HTMLElement} svgNode svg元素
   * @returns
   */
  function setConfig(config, svgNode) {
    const {
      size = '3em',
      strokeWidth = '4',
      strokeLinejoin = 'round',
      stroke = '#333'
    } = config || {};
    if (svgNode == null) return;
    svgNode.setAttribute('width', size);
    svgNode.setAttribute('height', size);
    for (const child of svgNode.childNodes) {
      child.setAttribute('stroke-width', strokeWidth);
      child.setAttribute('stroke-linejoin', strokeLinejoin);
      child.setAttribute('stroke', stroke);
    }
  }

  /**
   * 处理Input和Select
   * @param {string} type 设置项
   * @returns
   */
  function handleChange(type) {
    return (e) => {
      if (type !== 'strokeLinejoin') config[type] = e.target.value;
      else config[type] = e;
    };
  }
  /**
   * 按钮触发设置属性
   */
  function draw() {
    const svgNode = showRef.current.childNodes[0];
    setConfig(config, svgNode);
  }

  /**
   * 页面加载时挂载svg元素
   */
  useEffect(() => {
    const svgNode = str2svg(svg).documentElement;
    setConfig({}, svgNode);
    showRef.current.appendChild(svgNode); // 添加svg元素
    // console.log(showRef.current);
  });
  return (
    <Fragment>
      <Row>
        <Input
          addonBefore='大小'
          placeholder='大小'
          defaultValue='3em'
          onChange={handleChange('size')}
        />
        <Input
          addonBefore='粗细'
          placeholder='线段粗细'
          defaultValue='4'
          onChange={handleChange('strokeWidth')}
        />
        <Input
          addonBefore='颜色'
          placeholder='描边颜色'
          defaultValue='#333'
          onChange={handleChange('stroke')}
        />
        <Select
          placeholder='拐点类型'
          defaultValue='round'
          onChange={handleChange('strokeLinejoin')}>
          <Option value='round'>round</Option>
          <Option value='miter'>miter</Option>
          <Option value='bevel'>bevel</Option>
        </Select>
        <Button onClick={draw}>绘制</Button>
      </Row>
      <Row>
        <div style={{ fontSize: '16px' }} ref={showRef}></div>
      </Row>
    </Fragment>
  );
};

const demo_css = (props) => {
  return <Main title='Demo_css' left={<SVG_CssDemo />} />;
};
export default demo_css;
