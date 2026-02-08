import { Link } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { clients } from '../../data/mockData';
import { adminNav } from '../../data/navigation';

const AdminClients = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Clientes" subtitle="Gestão" />

      <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Carteira ativa</h3>
              <p className="text-sm text-white/60">Clientes premium em acompanhamento semanal.</p>
            </div>
            <Button>Novo cliente</Button>
          </div>
        <div className="mt-6 space-y-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p className="text-xs uppercase text-white/40">{client.segment}</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{client.name}</h4>
                <p className="text-sm text-white/60">Gestor: {client.manager}</p>
                <p className="text-xs text-white/50">Contato: {client.contact}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={client.status === 'Ativo' ? 'success' : 'warning'}>
                  {client.status}
                </Badge>
                <Badge>{client.plan}</Badge>
                <Link
                  to={`/admin/clients/${client.id}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-red-500/60 hover:text-red-200"
                >
                  Ver detalhe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
};

export default AdminClients;
