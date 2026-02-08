import AppShell from '../../components/layout/AppShell';
import Header from '../../components/layout/Header';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { adminNav } from '../../data/navigation';

const AdminClientRegistry = () => {
  return (
    <AppShell nav={adminNav} sidebarTitle="SV Creative" sidebarSubtitle="Admin">
      <Header title="Cadastro de clientes" subtitle="Ficha completa" />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Dados da empresa</h3>
            <p className="text-sm text-white/60">Informações estratégicas para decisões de mídia.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Nome da empresa',
              'Segmento',
              'Público-alvo',
              'Contato principal',
              'Contrato & validade',
              'Canal prioritário',
            ].map((label) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase text-white/40">{label}</p>
                <p className="mt-2 text-sm text-white/70">Preencher informações</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs uppercase text-white/40">Observações estratégicas</p>
            <p className="mt-2 text-sm text-white/70">
              Exemplo: ICP, metas trimestrais, diferenciais da marca, acordos específicos.
            </p>
          </div>
          <Button>Salvar cadastro</Button>
        </Card>

        <Card className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Resumo do cliente</h3>
            <p className="text-sm text-white/60">Checklist para não perder informações críticas.</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">Plano atual</p>
              <p className="mt-2 text-base font-semibold text-white">Performance 360</p>
              <Badge tone="success">Ativo</Badge>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">Acesso do cliente</p>
              <p className="mt-2 text-sm text-white/70">
                Link exclusivo gerado automaticamente após o cadastro.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase text-white/40">Próximo alinhamento</p>
              <p className="mt-2 text-sm text-white/70">Sugerir reunião de onboarding.</p>
            </div>
          </div>
        </Card>
      </section>
    </AppShell>
  );
};

export default AdminClientRegistry;
