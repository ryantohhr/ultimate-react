import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default function FriendsDisplay({
  friends,
  activeFriend,
  onAddFriend,
  onSelect,
  splitFormIsOpen,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            activeFriend={activeFriend}
            onSelect={onSelect}
            splitFormIsOpen={splitFormIsOpen}
            key={friend.name}
          />
        ))}
      </ul>
      <FriendForm onAddFriend={onAddFriend} />
    </div>
  );
}
