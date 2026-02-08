import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { adminNav } from '../../data/navigation';
import { workSessions } from '../../data/mockData';

const AdminWorkspace = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Área de trabalho" subtitle="Produtividade" />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Modo de trabalho</h3>
            <p className="text-sm text-white/60">Ative para registrar tempo e tarefas por cliente.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase text-white/40">Status atual</p>
                <p className="mt-2 text-2xl font-semibold text-white">Ativo desde 09:10</p>
                <p className="text-xs text-white/60">Cliente: Aurora Skincare</p>
              </div>
              <Badge tone="success">Em atividade</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button>Encerrar atividade</Button>
              <Button variant="secondary">Pausar sessão</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-xs uppercase text-white/40">Checklist rápido</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Registrar início e término de cada tarefa.</li>
              <li>Salvar solicitações recebidas e atendidas.</li>
              <li>Vincular reuniões e follow-ups ao cliente.</li>
            </ul>
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Sessões recentes</h3>
            <Button variant="ghost">Ver histórico</Button>
          </div>
          <div className="space-y-3">
            {workSessions.map((session) => (
              <div key={session.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{session.client}</p>
                  <Badge tone={session.status === 'Concluído' ? 'success' : 'warning'}>
                    {session.status}
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-white/60">{session.summary}</p>
                <p className="text-xs text-white/40">{session.duration}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
};

export default AdminWorkspace;
