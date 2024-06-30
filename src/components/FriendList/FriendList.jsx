import FriendlistItem from "../FriendListItem/FriendListItem";

export default function Friendlist({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendlistItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}


