import Button from '../ui/Button';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">{subtitle}</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary">Exportar dados</Button>
        <Button>Nova atualização</Button>
      </div>
    </header>
  );
};

export default Header;
