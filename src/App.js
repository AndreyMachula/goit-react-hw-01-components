import Statistics from 'components/Statistics';
import Profile from './components/Profile';
import FriendsList from 'components/FriendList';
import TransactionsHistory from 'components/TransactionHistory';

import user from './path/to/user.json';
import statistics from './path/to/statistics.json';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';

const App = () => {
  return (
    // task-1
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      {/* task-2 */}
      <Statistics title="Upload stats" stats={statistics} />

      {/* task-3 */}
      <FriendsList friends={friends} />

      {/* task-4 */}
      <TransactionsHistory items={transactions} />
    </div>
  );
}

export default App;