import ResourceState from './ResourceState.jsx';
import useCollection from '../hooks/useCollection.js';

function Users() {
  const { items: users, loading, error } = useCollection('users');

  return (
    <ResourceState title="Users" subtitle="Profiles, team membership, and active fitness goals." loading={loading} error={error}>
      <div className="data-grid users-grid">
        {users.map((user) => (
          <article className="record-card" key={user._id ?? user.username}>
            <h3>{user.displayName}</h3>
            <p className="muted">@{user.username}</p>
            <dl>
              <div>
                <dt>Team</dt>
                <dd>{user.teamName}</dd>
              </div>
              <div>
                <dt>Goal</dt>
                <dd>{user.fitnessGoal}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{user.email}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </ResourceState>
  );
}

export default Users;