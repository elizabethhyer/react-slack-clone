import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={handleChange}
            type="text"
            value={input}
            placeholder="Say hi!"
          />
          <SendButton type="submit" onClick={handleSubmit}>
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

const SendButton = styled.button`
  border: none;
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

  :focus {
    outline: none;
  }
`;

const Send = styled(SendIcon)`
  color: #fff;
`;
