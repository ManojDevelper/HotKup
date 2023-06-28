import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <div style={{position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', top: '0', left: '0', zIndex: '999999999', background: '#00000057'}}><Spin indicator={antIcon} /></div>;
}
export default Loader;