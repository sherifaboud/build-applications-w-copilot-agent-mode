import ResourceState from './ResourceState.jsx';
import useCollection from '../hooks/useCollection.js';

const teamsApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

function Teams() {
  const { items: teams, loading, error } = useCollection(teamsApiEndpoint);

  return (
    <ResourceState title="Teams" subtitle="Training groups with captains and weekly goals." loading={loading} error={error}>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Captain</th>
              <th>Members</th>
              <th>Weekly Goal</th>
              <th>Motto</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id ?? team.name}>
                <td>{team.name}</td>
                <td>{team.captain}</td>
                <td>{team.memberCount}</td>
                <td>{team.weeklyGoalMinutes} min</td>
                <td>{team.motto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ResourceState>
  );
}

export default Teams;