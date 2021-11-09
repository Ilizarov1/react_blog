import Main from '../components/Main';
import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { Button, Row, Slider, Col, Input, Select } from 'antd';
import { Bytedance } from '@icon-park/svg';
import { Fragment } from 'react';
import * as LineAnimation from '../public/LineAnimation.json';

const MyLottie = (props) => {
  const options = {
    loop: true,
    autoPlay: true,
    animationData: LineAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return <Lottie options={options} />;
};

const lottieDemo = (props) => {
  return <Main title='LottieDemo' left={<MyLottie />} />;
};
export default lottieDemo;
