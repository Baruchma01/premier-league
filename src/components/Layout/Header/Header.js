import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  padding: 1rem;
  box-shadow: 0px 0px 1px 1px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 1rem;
`;

const Header = () => (
  <HeaderDiv
    style={{
      backgroundImage: `url(https://miro.medium.com/max/1362/1*-BoC1TULqBUhCw-TdGaBgQ.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "75px",
    }}
  >
    Premier League
  </HeaderDiv>
);

export default Header;
