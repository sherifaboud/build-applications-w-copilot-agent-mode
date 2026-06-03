import ResourceState from './ResourceState.jsx';
import useCollection from '../hooks/useCollection.js';

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

const activitiesApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const { items: activities, loading, error } = useCollection(activitiesApiEndpoint);

  return (
    <ResourceState title="Activities" subtitle="Recent workouts, effort notes, and calorie estimates." loading={loading} error={error}>
      <div className="timeline">
        {activities.map((activity) => (
          <article className="timeline-item" key={activity._id ?? `${activity.username}-${activity.activityDate}`}>
            <div>
              <h3>{activity.activityType}</h3>
              <p className="muted">{activity.username}</p>
            </div>
            <div className="metric-row">
              <span>{activity.durationMinutes} min</span>
              <span>{activity.caloriesBurned} cal</span>
              <span>{dateFormatter.format(new Date(activity.activityDate))}</span>
            </div>
            <p>{activity.notes}</p>
          </article>
        ))}
      </div>
    </ResourceState>
  );
}

export default Activities;