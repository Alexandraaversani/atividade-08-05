import React from "react";
import styled from "styled-components/native";

export default function ContactCard({ name, phone }) {
  return (
    <Card>
      <Info>
        <Name>{name}</Name>
        <Phone>{phone}</Phone>
      </Info>
    </Card>
  );
}

const Card = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  elevation: 2;
`;

const Info = styled.View``;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Phone = styled.Text`
  font-size: 14px;
  color: #666;
`;
