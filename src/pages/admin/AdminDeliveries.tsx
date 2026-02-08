import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { adminNav } from '../../data/navigation';
import { deliveries } from '../../data/mockData';

const AdminDeliveries = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Entregas" subtitle="Controle" />

      <Card className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Inserir link externo</h3>
            <p className="text-sm text-white/60">
              Compartilhe materiais, relatórios e assets com status atualizado.
            </p>
          </div>
          <Button>Nova entrega</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase text-white/40">{delivery.id}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{delivery.title}</p>
                  <p className="text-xs text-white/50">{delivery.date}</p>
                </div>
                <Badge tone={delivery.status === 'Aprovado pelo cliente' ? 'success' : 'warning'}>
                  {delivery.status}
                </Badge>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button variant="secondary">Abrir link</Button>
                <Button variant="ghost">Atualizar status</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
};

export default AdminDeliveries;
