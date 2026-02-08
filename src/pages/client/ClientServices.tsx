import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clientServices } from '../../data/mockData';
import { clientNav } from '../../data/navigation';

const ClientServices = () => {
  return (
    <AppShell nav={clientNav} sidebarTitle="SV Creative" sidebarSubtitle="Cliente">
      <Header title="Serviços contratados" subtitle="Escopo" />

      <section className="grid gap-6 md:grid-cols-2">
        {clientServices.map((service) => (
          <Card key={service.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <Badge tone={service.status === 'Ativo' ? 'success' : 'warning'}>
                {service.status}
              </Badge>
            </div>
            <p className="text-sm text-white/70">{service.scope}</p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-white/50">Responsável: {service.owner}</p>
              <Button variant="secondary">Solicitar ajuste</Button>
            </div>
          </Card>
        ))}
      </section>
    </AppShell>
  );
};

export default ClientServices;
