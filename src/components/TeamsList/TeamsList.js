import React from "react";
import styled from "styled-components";

const Table = styled.table`
  font-family: "Red Rose", cursive;
  border-collapse: collapse;
  max-width: 900px;
  margin: 0 auto;
`;

const Tbody = styled.tbody`
  & > tr {
    &:hover {
      background-color: #00225c;
      color: white;
    }
  }
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Tr = styled.tr`
  cursor: pointer;
`;

const Thead = styled.thead``;

const TeamsList = ({ teams, rowClickHandler }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Founded</Th>
          <Th>Address</Th>
        </Tr>
      </Thead>
      <Tbody>
        {teams.map((team) => (
          <Tr
            key={team.team_key}
            onClick={() => rowClickHandler(team.team_key)}
          >
            <Td>{team.team_name}</Td>
            <Td>{team.founded.replace(";", ",")}</Td>
            <Td>{team.city}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TeamsList;
