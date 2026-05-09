const flow = ['User', 'Kernel', 'Engines', 'Memory', 'Validator', 'Deploy'];

export function ArchitectureFlow() {
  return (
    <section className="glass-card p-5">
      <h2 className="text-xl font-semibold">Architecture Pipeline</h2>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        {flow.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-lg bg-slate-900/70 px-3 py-2">{step}</span>
            {index < flow.length - 1 ? <span className="text-cyan-300">→</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
