import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const HeaderDiv = styled.header`
  padding: 1rem;
  box-shadow: 0px 0px 1px 1px grey;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 1rem;
  justify-content: space-between;
  max-height: 18px;
  flex-direction: row-reverse;
`;

const Img = styled.img`
  width: 76px;
  height: 40px;
`;

const P = styled.p`
  margin: 0 auto;
`;

const I = styled.i`
color: #00225c;
`;


const Header = ({ location }) => {
  const path = location.pathname;
  return (
    <HeaderDiv>
      <Img
        src="https://miro.medium.com/max/1362/1*-BoC1TULqBUhCw-TdGaBgQ.png"
        alt="logo"
      />
      <P>Premier League</P>
      {path !== "/" ? (
        <Link to="/">
          <I className="fas fa-arrow-circle-left fa-2x"></I>
        </Link>
      ) : null}
    </HeaderDiv>
  );
};

export default withRouter(Header);
