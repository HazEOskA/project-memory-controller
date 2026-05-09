import { dashboardModules } from '../data/modules';

export function DashboardGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {dashboardModules.map((moduleItem) => (
        <article key={moduleItem.name} className="glass-card p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">{moduleItem.name}</h3>
            <span className="rounded-md border border-slate-700 bg-slate-900/60 px-2 py-1 text-xs text-cyan-300">{moduleItem.status}</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{moduleItem.description}</p>
        </article>
      ))}
    </section>
  );
}
