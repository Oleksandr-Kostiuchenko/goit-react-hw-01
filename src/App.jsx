import { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import userDataJSON from "../src/UserData.json";

import friends from "./friends.json";
import FriendList from "./components/friendlist/FriendList";

function App() {
  return (
    <>
      <Profile
        name={userDataJSON.username}
        tag={userDataJSON.tag}
        location={userDataJSON.location}
        image={userDataJSON.avatar}
        stats={userDataJSON.stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
