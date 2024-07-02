import "./FriendListItem.css";

export default function FriendListItem({ friend }) {
  const { avatar = "", name = "Unknown", isOnline = false } = friend;

  return (
    <div>
      <div className="friendlist-item-container">
        <img src={avatar} alt={name} width="88" />
        <p className="friend-name">{name}</p>
        <p className={`friend-state ${isOnline ? "online" : "offline"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
