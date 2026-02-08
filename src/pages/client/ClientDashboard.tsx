import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clientKpis, clientServices, clientDeliveries } from '../../data/mockData';
import { clientNav } from '../../data/navigation';

const ClientDashboard = () => {
  return (
    <AppShell nav={clientNav} sidebarTitle="SV Creative" sidebarSubtitle="Cliente">
      <Header title="Dashboard do Cliente" subtitle="Visão geral" />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {clientKpis.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm text-white/60">{kpi.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{kpi.value}</p>
            <p className="mt-2 text-xs text-emerald-300">{kpi.variation}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Serviços ativos</h3>
            <Button variant="ghost">Ver detalhes</Button>
          </div>
          {clientServices.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{service.title}</p>
                <Badge tone={service.status === 'Ativo' ? 'success' : 'warning'}>
                  {service.status}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-white/60">{service.scope}</p>
              <p className="text-xs text-white/50">Responsável: {service.owner}</p>
            </div>
          ))}
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Entregas em destaque</h3>
            <Button variant="ghost">Histórico completo</Button>
          </div>
          {clientDeliveries.map((delivery) => (
            <div key={delivery.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">{delivery.id}</p>
              <p className="mt-2 text-base font-semibold text-white">{delivery.title}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Badge tone={delivery.status === 'Entregue' ? 'success' : 'warning'}>
                  {delivery.status}
                </Badge>
                <Button variant="secondary">Abrir link</Button>
              </div>
            </div>
          ))}
        </Card>
      </section>
    </AppShell>
  );
};

export default ClientDashboard;
