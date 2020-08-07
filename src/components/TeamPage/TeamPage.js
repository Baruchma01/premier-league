import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
`;
const Title = styled.div`
  box-shadow: 0px 0px 1px 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  text-align: center;
  margin: 0;
  margin-right: 50px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
border-collapse: collapse;
width: 100%;
`
const H4 = styled.h4`
margin-bottom: 0;
`;
const Th = styled.th`
padding: 8px;
text-align: left;
border-bottom: 1px solid #ddd;
`
const Td = Th;


const TeamPage = ({ teamInfo }) => {
  return (
    <Container>
      <Title>
        <H1>{teamInfo.team_name}</H1>
        <img
          src={teamInfo.team_badge}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
          }}
        />
      </Title>
      <Info>
        <H4>Founded: {teamInfo.founded} </H4>
        <h4>Address: {teamInfo.team_name} </h4>
        {teamInfo.site ? <a href={teamInfo.site}> {`${teamInfo.team_name} WebSite`} </a>: <p>No Site</p> }
      </Info>
      <Table>
        <thead>
        <tr>
          <Th>Player Name</Th>
          <Th>Player Number</Th>
        </tr>
        </thead>
        <tbody>
          {(teamInfo.players || []).map(singlePlayer => <tr key={singlePlayer.player_key}>
          <Td>{singlePlayer.player_name}</Td>
          <Td>{singlePlayer.player_number}</Td>
          </tr>)}
        </tbody>
      </Table>
    </Container>
  );
};

export default TeamPage;
