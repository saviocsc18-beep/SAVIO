import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export interface NavItem {
  label: string;
  to: string;
}

interface SidebarProps {
  title: string;
  subtitle: string;
  items: NavItem[];
}

const Sidebar = ({ title, subtitle, items }: SidebarProps) => {
  return (
    <aside className="flex h-full flex-col gap-8 border-r border-white/10 bg-black/60 px-6 py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{subtitle}</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">{title}</h1>
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'rounded-xl px-4 py-3 text-sm font-medium transition',
                isActive
                  ? 'bg-red-600/20 text-red-200 shadow-lg shadow-red-500/10'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-100">
        <p className="font-semibold">SV Creative</p>
        <p className="mt-2 text-white/70">
          Plataforma premium para gestão de campanhas, entregas e performance.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
