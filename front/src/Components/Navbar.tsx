import { Flex } from 'antd'
import React from 'react'
import { Button} from 'antd';
import logo from "../assets/Pladin.png"

type Props = {}

const Navbar = (props: Props) => {
  return (
    
    <Flex style={{justifyContent:"space-between",color:"white",height:"72px" , alignItems:"center"}}>
        <div style={{width:"72px",height:"22px",left:"4.57px"}}>
            <img src={logo} alt="" />
        </div>
        <div>
            <Flex style={{gap:"46px"}}>
                <div>
                    Home
                </div>
                <div>
                    Mint
                </div>
                <div>
                    Staking
                </div>
                <div>
                    Presale
                </div>
                <div>
                    BuAccount
                </div>
            </Flex>
        </div>
        <div>
            <Button style={{width:"237px",height:"54px",border:"0.5",padding:"5px",gap:"10px",borderColor:"#262626",color:"white",background:"#262626"}}>Button</Button>
        </div>
        
    </Flex>
    
  )
}

export default Navbar