import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clientDeliveries } from '../../data/mockData';
import { clientNav } from '../../data/navigation';

const ClientDeliveries = () => {
  return (
    <AppShell nav={clientNav} sidebarTitle="SV Creative" sidebarSubtitle="Cliente">
      <Header title="Entregas" subtitle="Histórico" />

      <section className="grid gap-6 md:grid-cols-2">
        {clientDeliveries.map((delivery) => (
          <Card key={delivery.id} className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase text-white/40">{delivery.id}</p>
                <p className="mt-2 text-lg font-semibold text-white">{delivery.title}</p>
                <p className="text-xs text-white/50">{delivery.date}</p>
              </div>
              <Badge tone={delivery.status === 'Entregue' ? 'success' : 'warning'}>
                {delivery.status}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Abrir link</Button>
              <Button>Recebido e aprovado</Button>
            </div>
          </Card>
        ))}
      </section>
    </AppShell>
  );
};

export default ClientDeliveries;
