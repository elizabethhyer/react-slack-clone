import React from "react";
import styled from "styled-components";
import db from "../firebase";
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Say hi!" />
          <SendButton>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 1.7rem 1.5rem;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    height: 2.6rem;
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      flex: 1;
      border: none;
      font-size: 0.8rem;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  background-color: #007a5a;
  border-radius: 2px;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 1.2rem;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: #fff;
`;
