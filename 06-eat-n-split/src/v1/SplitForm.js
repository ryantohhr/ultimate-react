import { useEffect, useState } from "react";

export default function SplitForm({
  activeFriend,
  friends,
  setFriends,
  isOpen,
  resetSplitForm,
}) {
  const [bill, setBill] = useState(0);
  const [selfExpense, setSelfExpense] = useState(0);
  const [payer, setPayer] = useState("self");

  useEffect(() => {
    setBill(0);
    setSelfExpense(0);
    setPayer("self");
  }, [isOpen, activeFriend, friends]);

  function handleSplit(e) {
    e.preventDefault();

    let balanceChange;

    if (payer === "self") {
      balanceChange = bill - selfExpense;
    } else balanceChange = selfExpense - bill;

    const newBalance = activeFriend.balance + balanceChange;

    setFriends(
      friends.map((friend) => {
        if (friend.id === activeFriend.id) {
          return { ...friend, balance: newBalance };
        } else return friend;
      })
    );

    resetSplitForm();
  }

  return (
    <>
      {isOpen && (
        <form className="form form-split-bill">
          <h2>SPLIT A BILL WITH {activeFriend.name.toUpperCase()}</h2>
          <label>💰 Bill value</label>
          <input
            type="number"
            value={bill === 0 ? "" : bill}
            onChange={(e) => {
              setBill(e.target.value);
            }}
          ></input>
          <label>🧍‍♀️ Your expense</label>
          <input
            type="number"
            value={selfExpense === 0 ? "" : selfExpense}
            onChange={(e) => {
              setSelfExpense(e.target.value);
            }}
          ></input>
          <label>👫 {activeFriend.name}'s expense</label>
          <input disabled value={bill - selfExpense}></input>
          <label>🤑 Who is paying the bill?</label>
          <select value={payer} onChange={(e) => setPayer(e.target.value)}>
            <option value="self">You</option>
            <option value="friend">{activeFriend.name}</option>
          </select>
          <button className="button" onClick={handleSplit}>
            Split bill
          </button>
        </form>
      )}
    </>
  );
}
