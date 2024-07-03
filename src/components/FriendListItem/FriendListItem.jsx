import styles from "./FriendListItem.module.css";

const {
  friendListItemContainer,
  friendName,
  friendState,
  online,
  offline
} = styles;

const FriendListItem = ({


 friend

}) => {
  const { avatar = "", name = "Unknown", isOnline = false } = friend;

  return (
    <div>
      <div className={friendListItemContainer}>
        <img src={avatar} alt={name} width="88" />
        <p className={friendName}>{name}</p>
        <p className={`${friendState} ${isOnline ? online : offline}`}>
  {isOnline ? "Online" : "Offline"}
</p>
      </div>
    </div>
  );
}

export default FriendListItem
