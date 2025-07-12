export default function Friend({
  friend,
  activeFriend,
  onSelect,
  splitFormIsOpen,
}) {
  return (
    <li
      className={
        (activeFriend && activeFriend.id) === friend.id ? "selected" : ""
      }
    >
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        {friend.balance > 0 ? (
          <p className="green">
            {friend.name} owes you ${friend.balance}
          </p>
        ) : friend.balance < 0 ? (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        ) : (
          <p>You and {friend.name} are even</p>
        )}
      </div>

      {(!activeFriend || activeFriend.id === friend.id) && splitFormIsOpen ? (
        <button
          className="button"
          value="close"
          onClick={(e) => onSelect(e.target.value, friend)}
        >
          Close
        </button>
      ) : (
        <button
          className="button"
          value="select"
          onClick={(e) => onSelect(e.target.value, friend)}
        >
          Select
        </button>
      )}
    </li>
  );
}
