import FriendlistItem from "../FriendListItem/FriendListItem";
import "./FriendList.css"

export default function Friendlist({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendlistItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}


