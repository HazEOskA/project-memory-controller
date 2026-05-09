import { dashboardModules } from '../data/modules';

export function DashboardGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {dashboardModules.map((moduleName) => (
        <article key={moduleName} className="glass-card p-5">
          <h3 className="text-lg font-semibold">{moduleName}</h3>
          <p className="mt-2 text-sm text-slate-400">Operational status: synced and ready.</p>
        </article>
      ))}
    </section>
  );
}
