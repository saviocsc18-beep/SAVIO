import { ReactNode } from 'react';
import Sidebar, { NavItem } from './Sidebar';

interface AppShellProps {
  nav: NavItem[];
  sidebarTitle: string;
  sidebarSubtitle: string;
  children: ReactNode;
}

const AppShell = ({ nav, sidebarTitle, sidebarSubtitle, children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
        <Sidebar title={sidebarTitle} subtitle={sidebarSubtitle} items={nav} />
        <main className="px-6 py-8 lg:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppShell;
