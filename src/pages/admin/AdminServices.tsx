import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { services } from '../../data/mockData';
import { adminNav } from '../../data/navigation';

const AdminServices = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Serviços da Agência" subtitle="Oferta" />

      <section className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between">
                <Badge tone="neutral">{service.status}</Badge>
                <span className="text-xs text-red-300">{service.highlight}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Gerenciar squad</Button>
              <Button variant="secondary">Atualizar cronograma</Button>
            </div>
          </Card>
        ))}
      </section>
    </AppShell>
  );
};

export default AdminServices;
