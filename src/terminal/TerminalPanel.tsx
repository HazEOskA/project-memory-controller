import { terminalCommands } from '../data/modules';

export function TerminalPanel() {
  return (
    <section className="glass-card p-5">
      <h2 className="text-xl font-semibold">Terminal</h2>
      <div className="mt-4 space-y-2 rounded-xl bg-black/50 p-4 font-mono text-sm text-emerald-300">
        {terminalCommands.map((command) => (
          <div key={command}>&gt; {command}</div>
        ))}
      </div>
    </section>
  );
}
