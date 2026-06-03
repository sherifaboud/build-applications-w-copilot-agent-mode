import ResourceState from './ResourceState.jsx';
import useCollection from '../hooks/useCollection.js';

function Workouts() {
  const { items: workouts, loading, error } = useCollection('workouts');

  return (
    <ResourceState title="Workouts" subtitle="Personalized suggestions matched to user goals." loading={loading} error={error}>
      <div className="data-grid workouts-grid">
        {workouts.map((workout) => (
          <article className="record-card" key={workout._id ?? workout.title}>
            <div className="card-heading-row">
              <h3>{workout.title}</h3>
              <span className="pill">{workout.difficulty}</span>
            </div>
            <p className="muted">{workout.focusArea} · {workout.durationMinutes} min</p>
            <p>{workout.suggestedForGoal}</p>
            <ul className="compact-list">
              {(workout.exercises ?? []).map((exercise) => (
                <li key={exercise}>{exercise}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ResourceState>
  );
}

export default Workouts;