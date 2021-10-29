import 'antd/dist/antd.css';
import '../styles/comm.css';
import React from 'react';
React.useLayoutEffect = React.useEffect;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
