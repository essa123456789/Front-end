import { Flex } from 'antd'
import React from 'react'
import Text from './Text'
import NFTCard from './NFTCard'
import card from "../assets/body.jpeg"
import card1 from "../assets/card1.jpeg"

function Ltestgems() {
  return (
    <div>
    <Flex style={{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",}}>
      <Text fw={700} fs={"28px"} style={{color:"white",letterSpacing:"-3%", lineHeight:"54px"}}>
        Discover the Latest GEMS
      </Text>
            
      <Text fs={"20px"} fw={600} style={{color:"#7D7D7D",lineHeight:"20px"}}>
        Explore the Freshest Additions to Our Growing Collection of Unique NFTs. Each Piece Tells a Story.
      </Text>
    </Flex>
    <Flex style={{gap:"15px",marginTop:"30px"}}>
    <NFTCard
        image={card}
        name="PALADINS #38916"
        date="10/05/2024"
        category="#Gaming"
        price="1 PAL"
      />
      <NFTCard
        image={card1}
        name="PALADINS #38916"
        date="10/05/2024"
        category="#Gaming"
        price="1 PAL"
      />
      <NFTCard
        image={card}
        name="PALADINS #38916"
        date="10/05/2024"
        category="#Gaming"
        price="1 PAL"
      />
      <NFTCard
        image={card1}
        name="PALADINS #38916"
        date="10/05/2024"
        category="#Gaming"
        price="1 PAL"
      />

    </Flex>

    

  </div>

  )
}

export default Ltestgems