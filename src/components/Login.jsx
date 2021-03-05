import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          photo: res.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg
          src={
            null
              ? null
              : "http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          }
        />

        <SignInButton onClick={signIn}>Sign in with google</SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #9477cb;
  padding: 5rem 6rem;
  border-radius: 0.7rem;
  box-shadow: 0 1px 3px #800080;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 7.5rem;
  filter: drop-shadow(10px 5px 1px #800080);
`;

const SignInButton = styled.button`
  font-size: 1.1rem;
  background-color: #0a8d48;
  color: #fff;
  border: none;
  margin-top: 2rem;
  text-transform: uppercase;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border-radius: 0.7rem;
  box-shadow: 0 1px 3px #800080;

  :focus {
    outline: none;
  }
`;
