export default function FriendListItem({ friend }) {
    return (
      <div>
        <div>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <p>{friend.name}</p>
          <p>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }

