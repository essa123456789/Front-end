import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex } from 'antd';
import Text from './Text';

function NFTCard({ image, name, date, category, price }) {
  return (
    <Flex style={{ flexDirection: "column", alignItems: "center", gap: "12.03px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.2)",backgroundColor:"rgba(255, 255, 255, 0.06)" }}>
      <img 
        src={image}
        alt={name}
        style={{
          backgroundSize: "cover",
          width: "282.75px",
          height: "289px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px 8px 0 0"
        }}
      />
      <Flex style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px", width: "270.75px", padding: "0 12px" }}>
        <Flex style={{ flexDirection: "column", gap: "4px", borderBottom: "2px solid rgba(255, 255, 255, 0.2)", alignItems: "flex-start", paddingBottom: "12px", width: "100%" }}>
          <Text fs="18px" fw={500} style={{ lineHeight: "23%", letterSpacing: "10%", color: "#FFCB3A", marginTop: "10px" }}>
            {name}
          </Text>
          <Text fs="16px" fw={600} style={{ lineHeight: "21.7px", color: "white" }}>
            {date}
          </Text>
          <Text fs="18px" fw={600} style={{ lineHeight: "24.41px", color: "#FFFFFF" }}>
            {category}
          </Text>
          <Text fs="18px" fw={600} style={{ lineHeight: "24.41px", color: "white", margin: "15px 0px 30px 0px" }}>
            <span style={{ borderRadius: "8px", backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "8px" }}>{price}</span>
          </Text>
        </Flex>
        <Flex style={{ width: "100%", justifyContent: "center" }}>
          <Button style={{ borderColor: "transparent", color: "white", background: "rgba(255, 255, 255, 0.2)", margin: "10px 0 0 0", width: "140px" }}>Button</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

NFTCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default NFTCard;
