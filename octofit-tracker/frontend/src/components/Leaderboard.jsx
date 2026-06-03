import ResourceState from './ResourceState.jsx';
import useCollection from '../hooks/useCollection.js';

function Leaderboard() {
  const { items: entries, loading, error } = useCollection('leaderboard');

  return (
    <ResourceState title="Leaderboard" subtitle="Ranked weekly performance across OctoFit teams." loading={loading} error={error}>
      <div className="leaderboard-list">
        {entries.map((entry) => (
          <article className="leaderboard-row" key={entry._id ?? entry.rank}>
            <strong>#{entry.rank}</strong>
            <div>
              <h3>{entry.username}</h3>
              <p className="muted">{entry.teamName}</p>
            </div>
            <span>{entry.totalPoints} pts</span>
            <span>{entry.weeklyMinutes} min</span>
          </article>
        ))}
      </div>
    </ResourceState>
  );
}

export default Leaderboard;