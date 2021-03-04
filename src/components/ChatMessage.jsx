import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg"
          alt="User Image"
        />
      </UserAvatar>
      <MessageContent>
        <Name>
          Liz
          <span>2 March 2021</span>
        </Name>
        <Text>Hello</Text>
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
