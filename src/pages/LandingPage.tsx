import { ArchitectureFlow } from '../modules/ArchitectureFlow';
import { DashboardGrid } from '../components/DashboardGrid';
import { Hero } from '../components/Hero';
import { PortfolioCard } from '../components/PortfolioCard';
import { TerminalPanel } from '../terminal/TerminalPanel';

export function LandingPage() {
  return (
    <div className="space-y-6">
      <Hero />
      <DashboardGrid />
      <div className="grid gap-6 xl:grid-cols-2">
        <TerminalPanel />
        <ArchitectureFlow />
      </div>
      <PortfolioCard />
    </div>
  );
}
