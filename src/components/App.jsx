import Profile from "./Profile/Profile";
import userData from "../userData.json";
import Friendlist from "./FriendList/FriendList";
import friendsData from "../friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"

export default function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
      <Friendlist friends={friendsData} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
}


