function ResourceState({ title, subtitle, loading, error, children }) {
  return (
    <section className="resource-section">
      <header className="resource-header">
        <div>
          <p className="section-kicker">OctoFit Tracker</p>
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </header>

      {loading && <div className="status-panel">Loading latest records...</div>}
      {error && <div className="status-panel error">{error}</div>}
      {!loading && !error && children}
    </section>
  );
}

export default ResourceState;