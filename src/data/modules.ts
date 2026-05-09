export type DashboardModule = {
  name: string;
  description: string;
  status: 'Live' | 'Monitoring' | 'Watchlist';
};

export const dashboardModules: DashboardModule[] = [
  {
    name: 'Dashboard',
    description: 'Unified snapshot of market, airdrops, wallet health, and signal activity.',
    status: 'Live'
  },
  {
    name: 'Market & Trending',
    description: 'Track top movers, BTC/ETH momentum, and trending sectors.',
    status: 'Live'
  },
  {
    name: 'Airdrops & Farming',
    description: 'Monitor campaigns, farming windows, and eligibility checklists.',
    status: 'Monitoring'
  },
  {
    name: 'Wallet Status',
    description: 'Watch balances, gas readiness, and cross-chain activity state.',
    status: 'Monitoring'
  },
  {
    name: 'Signal Cards',
    description: 'Action-first cards for momentum, reversals, and risk alerts.',
    status: 'Live'
  },
  {
    name: 'Mobile Operations',
    description: 'Touch-friendly quick actions and compact layouts for daily use.',
    status: 'Live'
  }
];

export const signalCards = [
  { label: 'BTC Momentum', value: '+3.2%', tone: 'text-emerald-300' },
  { label: 'ETH Breakout Risk', value: 'Medium', tone: 'text-amber-300' },
  { label: 'SOL Funding Heat', value: 'Elevated', tone: 'text-rose-300' }
];

export const terminalCommands = [
  'scan trending pairs',
  'sync airdrop board',
  'check wallet status',
  'review farming signals'
];
