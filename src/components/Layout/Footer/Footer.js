import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  margin-top: 5px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #3d195b;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return <FooterDiv>
      <p>
      Premier League
      </p>
  </FooterDiv>;
};

export default Footer;
