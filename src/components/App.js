// import './App.css';

import { Profile } from './Profile/Profile';
import user from './initial/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './initial/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './initial/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './initial/transactions.json';

export function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}

// export {App};