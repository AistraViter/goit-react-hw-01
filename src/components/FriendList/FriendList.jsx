import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const { friendList } = styles;

const FriendList = ({ friends }) => {
  return (
    <ul className={friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
