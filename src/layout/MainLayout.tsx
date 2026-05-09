import { ReactNode } from 'react';
import { useSidebar } from '../hooks/useSidebar';

type Props = { children: ReactNode };

export function MainLayout({ children }: Props) {
  const sidebar = useSidebar();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <p className="font-semibold tracking-wide">CryptoWolf Tools Hub</p>
          <button className="rounded-md border border-slate-700 px-3 py-2 text-sm md:hidden" onClick={sidebar.toggle}>Menu</button>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl">
        <aside
          className={`${sidebar.open ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-800 bg-slate-950 p-6 transition-transform md:static md:translate-x-0`}
        >
          <nav className="space-y-3 text-sm text-slate-300">
            <p>Dashboard</p>
            <p>Market</p>
            <p>Airdrops</p>
            <p>Wallet</p>
            <p>Signals</p>
          </nav>
        </aside>
        <main className="w-full overflow-x-hidden px-4 py-6 md:px-6" onClick={sidebar.close}>{children}</main>
      </div>
    </div>
  );
}
