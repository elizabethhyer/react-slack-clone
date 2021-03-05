import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import InfoIcon from "@material-ui/icons/Info";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setMessages(messages);
      });
  };

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <HeaderName># {channel && channel.name}</HeaderName>
          <ChannelInfo>Some info</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              img={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
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
