import React from 'react';
import {  Flex, Layout } from 'antd';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const { Footer, Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  backgroundColor:"transparent",
  overflow: 'hidden',
  maxWidth: '1392px',
  
};

const constainerStyle: React.CSSProperties = {
  width: '100%',
  justifyContent: "center",
  color:"black",
  maxHeight:"100%"
}

interface Props {
  children: React.ReactNode;
}

const Pagelayout= ({children}:Props ) => (
  <Flex style={constainerStyle}>
    <Layout style={layoutStyle}>
      <Navbar/>
      <Content style={contentStyle}>{children}<Outlet /></Content>
      
    </Layout>
  </Flex>
);

export default Pagelayout;