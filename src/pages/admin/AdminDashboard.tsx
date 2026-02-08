import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { adminSummaryCards, deliveries, services } from '../../data/mockData';
import { adminNav } from '../../data/navigation';

const AdminDashboard = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Dashboard da Agência" subtitle="Visão geral" />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {adminSummaryCards.map((card) => (
          <Card key={card.label}>
            <p className="text-sm text-white/60">{card.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-emerald-300">{card.trend}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Entregas recentes</h3>
              <p className="text-sm text-white/60">Últimas submissões da squad.</p>
            </div>
            <Button variant="ghost">Ver tudo</Button>
          </div>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase text-white/40">{delivery.id}</p>
                  <p className="mt-2 text-base font-semibold text-white">{delivery.title}</p>
                  <p className="text-xs text-white/50">{delivery.date}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone={delivery.status === 'Aprovado pelo cliente' ? 'success' : 'warning'}>
                    {delivery.status}
                  </Badge>
                  <Button variant="secondary">Abrir link</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Squads em foco</h3>
            <p className="text-sm text-white/60">Visão rápida dos serviços ativos.</p>
          </div>
          <div className="space-y-4">
            {services.slice(0, 3).map((service) => (
              <div key={service.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm uppercase text-white/40">{service.status}</p>
                <p className="mt-2 text-lg font-semibold text-white">{service.title}</p>
                <p className="mt-1 text-sm text-white/60">{service.description}</p>
                <p className="mt-3 text-xs text-red-300">{service.highlight}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Alertas rápidos</h3>
          <Button variant="ghost">Ver todas</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {deliveries
            .filter((delivery) => delivery.status !== 'Aprovado pelo cliente')
            .map((delivery) => (
              <div key={delivery.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase text-white/40">{delivery.id}</p>
                <p className="mt-2 text-base font-semibold text-white">{delivery.title}</p>
                <p className="text-xs text-white/50">Status: {delivery.status}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge tone="warning">Aguardando aprovação</Badge>
                  <Button variant="secondary">Abrir entrega</Button>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </AppShell>
  );
};

export default AdminDashboard;
