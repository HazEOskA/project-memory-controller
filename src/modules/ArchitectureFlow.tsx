import { signalCards } from '../data/modules';

export function ArchitectureFlow() {
  return (
    <section className="glass-card p-5">
      <h2 className="text-xl font-semibold">Signal Cards</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {signalCards.map((signal) => (
          <article key={signal.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">{signal.label}</p>
            <p className={`mt-2 text-lg font-semibold ${signal.tone}`}>{signal.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
