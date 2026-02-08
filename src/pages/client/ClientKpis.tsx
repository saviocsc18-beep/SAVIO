import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clientKpis } from '../../data/mockData';
import { clientNav } from '../../data/navigation';

const ClientKpis = () => {
  return (
    <AppShell nav={clientNav} sidebarTitle="SV Creative" sidebarSubtitle="Cliente">
      <Header title="KPIs estratégicos" subtitle="Resultados" />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {clientKpis.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm text-white/60">{kpi.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{kpi.value}</p>
            <p className="mt-2 text-xs text-emerald-300">{kpi.variation}</p>
          </Card>
        ))}
      </section>

      <Card className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Insights rápidos</h3>
            <p className="text-sm text-white/60">Resumo das últimas tendências.</p>
          </div>
          <Button variant="secondary">Baixar relatório</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <Badge tone="success">Conversão</Badge>
            <p className="mt-3 text-lg font-semibold text-white">+18% em leads qualificados</p>
            <p className="text-sm text-white/60">Campanhas sazonais elevando intenção.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <Badge tone="warning">Custo</Badge>
            <p className="mt-3 text-lg font-semibold text-white">CPA abaixo da meta</p>
            <p className="text-sm text-white/60">Otimização criativa reduziu custos.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <Badge>Receita</Badge>
            <p className="mt-3 text-lg font-semibold text-white">Ticket médio +12%</p>
            <p className="text-sm text-white/60">Bundles e cross-sell em destaque.</p>
          </div>
        </div>
      </Card>
    </AppShell>
  );
};

export default ClientKpis;
