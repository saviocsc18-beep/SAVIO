import { useParams, Link } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clients, services, deliveries } from '../../data/mockData';
import { adminNav } from '../../data/navigation';

const AdminClientDetail = () => {
  const { clientId } = useParams();
  const client = clients.find((item) => item.id === clientId) ?? clients[0];

  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title={client.name} subtitle="Detalhe do cliente" />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/60">Segmento</p>
              <p className="text-2xl font-semibold text-white">{client.segment}</p>
            </div>
            <Badge tone={client.status === 'Ativo' ? 'success' : 'warning'}>{client.status}</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase text-white/40">Gestor</p>
              <p className="mt-2 text-lg font-semibold text-white">{client.manager}</p>
              <p className="text-xs text-white/50">Squad Performance</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase text-white/40">Plano contratado</p>
              <p className="mt-2 text-lg font-semibold text-white">{client.plan}</p>
              <p className="text-xs text-white/50">Renovação automática</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase text-white/40">Público-alvo</p>
              <p className="mt-2 text-sm text-white/70">{client.target}</p>
              <p className="text-xs text-white/50">Objetivo: {client.objective}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase text-white/40">Portal do cliente</p>
              <p className="mt-2 text-sm text-white/70">{client.portalLink}</p>
              <p className="text-xs text-white/50">Acesso exclusivo via link</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Agendar alinhamento</Button>
            <Button variant="secondary">Enviar relatório</Button>
            <Link
              to="/admin/clients"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40"
            >
              Voltar
            </Link>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Prioridades da semana</h3>
          {services.slice(0, 3).map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">{service.status}</p>
              <p className="mt-2 text-lg font-semibold text-white">{service.title}</p>
              <p className="text-sm text-white/60">{service.description}</p>
            </div>
          ))}
        </Card>
      </section>

      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Entregas relacionadas</h3>
          <Button variant="ghost">Adicionar nova entrega</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">{delivery.id}</p>
              <p className="mt-2 text-base font-semibold text-white">{delivery.title}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Badge tone={delivery.status === 'Aprovado pelo cliente' ? 'success' : 'warning'}>
                  {delivery.status}
                </Badge>
                <Button variant="secondary">Abrir link</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
};

export default AdminClientDetail;
