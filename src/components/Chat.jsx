import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import InfoIcon from "@material-ui/icons/Info";

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <HeaderName>#channel 1</HeaderName>
          <ChannelInfo>Some info</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 4rem auto min-content;
  background: #fff;
`;

const Channel = styled.div``;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;

const Header = styled.div`
  padding: 0 1.5rem;
  border-bottom: 1px solid #532753;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderName = styled.div`
  font-weight: 700;
  text-transform: uppercase;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const MessageContainer = styled.div``;

const Info = styled(InfoIcon)`
  margin-left: 0.5rem;
`;
