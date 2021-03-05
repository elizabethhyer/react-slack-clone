import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, img, timestamp }) {
  return (
    <Container>
      <UserAvatar>
        <img src={img} alt="User Image" />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  margin: 0.5rem 1.3rem;
  display: flex;
  align-items: center;

  :hover {
    padding: 0.2rem 0.3rem;
    background-color: #d3d3d3;
    border-radius: 4px;
  }
`;

const UserAvatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 3px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`;

const Name = styled.span`
  font-weight: 800;
  font-size: 0.9rem;
  line-height: 1.4;

  span {
    font-weight: 400;
    color: rgba(97, 97, 97);
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Text = styled.span``;
