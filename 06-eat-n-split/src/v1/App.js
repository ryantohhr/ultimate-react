import FriendsDisplay from "./FriendsDisplay";
import SplitForm from "./SplitForm";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [activeFriend, setActiveFriend] = useState(null);
  const [splitFormIsOpen, setSplitFormIsOpen] = useState(false);

  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
  }

  function handleSelect(action, friend) {
    setActiveFriend(friend);
    if (action === "select") setSplitFormIsOpen(true);
    else {
      resetSplitForm();
    }
  }

  function resetSplitForm() {
    setSplitFormIsOpen(false);
    setActiveFriend(null);
  }

  return (
    <div className="app">
      <FriendsDisplay
        friends={friends}
        activeFriend={activeFriend}
        onSelect={handleSelect}
        onAddFriend={handleAddFriend}
        splitFormIsOpen={splitFormIsOpen}
      />
      <SplitForm
        activeFriend={activeFriend}
        friends={friends}
        setFriends={setFriends}
        isOpen={splitFormIsOpen}
        resetSplitForm={resetSplitForm}
      />
    </div>
  );
}
