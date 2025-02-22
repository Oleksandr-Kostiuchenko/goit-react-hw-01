import { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import userDataJSON from "../src/datajson/UserData.json";

import FriendList from "./components/friendlist/FriendList";
import friends from "../src/datajson/friends.json";

import TransactionHistory from "./components/transactionhistory/TransactionHistory";
import transactions from "../src/datajson/transactions.json";

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

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
