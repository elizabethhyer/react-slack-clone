import React from "react";
import { sidebarItems } from "../data/SidebarData";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";

function Sidebar({ rooms }) {
  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>annoyingVideo</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((i) => (
          <MainChannelItem>
            {i.icon}
            {i.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {rooms.map((r) => (
            <Channel># {r.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 100%;
  background-color: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: #fff;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 2rem;
  height: 2rem;
  background: #fff;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 1.5rem;
`;

const MainChannelItem = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 15% auto;
  height: 1.5rem;
  align-items: center;
  padding: 0.25rem 1rem;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: #fff;
  margin-top: 0.5rem;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;
