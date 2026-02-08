import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ClientLogin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-3xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Card className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Cliente</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Portal do Cliente</h2>
              <p className="mt-2 text-sm text-white/60">
                Acompanhe entregas, KPIs e comunicação com a SV Creative.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Email</label>
                <div className="mt-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
                  cliente@marca.com
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Senha</label>
                <div className="mt-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
                  •••••••••
                </div>
              </div>
            </div>
            <Button className="w-full">Acessar painel</Button>
          </Card>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">SV Creative</p>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              Seus resultados em tempo real, com total transparência.
            </h1>
            <p className="text-base text-white/70">
              KPIs, entregas e próximos passos centralizados. Acompanhe tudo com
              clareza e foco.
            </p>
            <Button variant="secondary">Falar com o time</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
