import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const AdminLogin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">SV Creative</p>
            <h1 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">
              Plataforma premium para gestão completa de clientes, tráfego e entregas.
            </h1>
            <p className="text-base text-white/70">
              Acompanhe performance, serviços e squads em um único painel. Experiência
              pensada para agências de alta performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Solicitar acesso</Button>
              <Button variant="secondary">Ver demonstração</Button>
            </div>
          </div>
          <Card className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Admin</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Login da agência</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Email</label>
                <div className="mt-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
                  agencia@svcreative.com
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Senha</label>
                <div className="mt-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
                  •••••••••
                </div>
              </div>
            </div>
            <Button className="w-full">Entrar no painel</Button>
            <p className="text-xs text-white/50">
              Acesso protegido. Dados exibidos são mockados para esta fase visual.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
