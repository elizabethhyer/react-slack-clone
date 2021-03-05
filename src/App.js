import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Home from "./components/Home";
import styled from "styled-components";
import db from "./firebase";
import { auth, provider } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                <Route path={"/"}>Home</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  padding: 1.5rem;
  width: auto;
  height: 95vh;
  display: grid;
  grid-template-rows: 3rem auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 16.25rem auto;
`;
