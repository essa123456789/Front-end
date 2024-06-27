import React from 'react'
import hero from "../assets/hero.jpeg"
import { Button, Flex } from 'antd'
import hero1 from "../assets/hero1.png"
import Text from './Text'
import { Transform } from '@mui/icons-material'
const Hero = () => {
  return (
    <Flex 
      style={{ 
         
        padding: '24px', 
        position: 'relative',
        backgroundImage: `url(${hero})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      
        <Flex style={{flexDirection:"column",justifyContent:"space-around"}}>
            
            <Text  fw={700} fs={"74px"} style={{lineHeight:"87%",letterSpacing:"-2.2px",color:"white",textTransform:"uppercase",textAlign:"left",height:"180px",width:"760px"}}>
                Unlock Your Creativity with <span style={{color:"yellow"}}>PALADINS</span>
            </Text>
            <Text fw={600} fs={"20px"}style={{width:"760",height:"11px",lineHeight:"100%",color:"rgba(255, 255, 255, 0.5)",display:"block",textAlign:"left"}}>
                Mint, Showcase, and Own Your Unique Creations in the World of NFTs
            </Text>
            <Flex style={{flexDirection:"column",backgroundColor:"red"}}>

            <Flex style={{flexDirection:"row",gap:"10px"}}>
                <Button type='default' style={{ width:"227px",height:"44px",backgroundColor:"#262626",borderColor:"black", color:"white"}}>How to mint</Button>
                <Button type='primary' style={{ width:"227px",height:"44px",borderColor:"black", color:"white"}}>How to mint</Button>
            </Flex>
            <Text style={{width:"66px",height:"9px", color:"rgba(255, 255, 255, 0.5)",}}>
            (0.03 ETH)
            </Text>
            </Flex>
            
      </Flex> 
      <div >
        <img src={hero1} alt="hero1" style={{width:"560px",height:"353px",display:"block"}} />
      </div>
    </Flex>
  );
}

export default Hero;