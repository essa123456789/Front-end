import { Flex } from 'antd';
import { Button } from 'antd';
import logo from "../assets/Pladin.png";
import React, { useState } from 'react';
import wallet from "../assets/404 Wallet.png"
type Props = {}

const Navbar: React.FC<Props> = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const navItemStyle = (item: string): React.CSSProperties => ({
    cursor: 'pointer',
    color: activeItem === item ? 'yellow' : 'white',
    textDecoration: 'none',
    borderBottom: activeItem === item ? '2px solid yellow' : 'none', // Border bottom for active item
    paddingBottom: '0px',
    height:"100%",
    bottom:"20px"
  });

  return (
    <Flex style={{ justifyContent: "space-between", color: "white", height: "72px",borderBottom: "2px solid #262626",alignItems:"center"}}>
      <div style={{ width: "72px", height: "22px", left: "4.57px" }}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Flex style={{ gap: "46px", position:"relative" }}>
          <div style={navItemStyle('Home')} onClick={() => handleClick('Home')}>
            Home
          </div>
          <div style={navItemStyle('Mint')} onClick={() => handleClick('Mint')}>
            Mint
          </div>
          <div style={navItemStyle('Staking')} onClick={() => handleClick('Staking')}>
            Staking
          </div>
          <div style={navItemStyle('Presale')} onClick={() => handleClick('Presale')}>
            Presale
          </div>
          <div style={navItemStyle('Account')} onClick={() => handleClick('Account')}>
            Account
          </div>
        </Flex>
      </div>
      
        <Button style={{ border: "0.5px solid #262626", color: "white", background: "#262626",width: '227px', height: '44px' }}>Button</Button>
        
      
        
    </Flex>
  );
};

export default Navbar;
