import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search" />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  background: #350d36;
  color: #fff;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  margin: 0 1rem;
  width: auto;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 1rem;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgba(104 74 104);
  border-radius: 6px;

  input {
    background-color: transparent;
    border: none;
    padding: 0.5rem 0.25rem;
    color: #fff;
    width: 100%;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 1rem;
`;

const UserImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3px;
  border: 1px solid white;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
