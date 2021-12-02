import Main from '../components/Main';
import React, { useEffect, useState } from 'react';
import { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png';
import { Bytedance } from '@icon-park/svg';
import { Button } from 'antd';

const SaveSvgAsPngDemo = (props) => {
  const showRef = React.createRef();
  // 从icon库中获取svg字符串
  const svgStr = Bytedance({ theme: 'filled' });

  useEffect(() => {
    // 初始化页面
    const xmlNode = new DOMParser().parseFromString(svgStr, 'text/xml').documentElement;
    xmlNode.setAttribute('width', '2em');
    xmlNode.setAttribute('height', '2em');
    showRef.current.appendChild(xmlNode);
  });

  function handleDownload() {
    const option = {
      backgroundColor: 'white', // 背景颜色，默认透明
      height: 100, // 大小
      width: 100,
      top: 0, // 在viewbox中的位置
      left: 0,
      scale: 1 // 缩放
    };
    // 转换成SvgUri
    svgAsDataUri(showRef.current.firstChild).then((res) => {
      console.log(res);
    });
    // 直接下载
    saveSvgAsPng(showRef.current.firstChild, 'test.png', option);
  }

  return (
    <div>
      <div style={{ fontSize: '16px' }} ref={showRef}></div>
      <div>
        <Button onClick={handleDownload}>一键下载</Button>
      </div>
    </div>
  );
};

const Demo = (props) => {
  return <Main title='Demo' left={<SaveSvgAsPngDemo />} />;
};
export default Demo;
