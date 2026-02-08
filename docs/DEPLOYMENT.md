# Deploy MVP (Firebase Hosting)

Este passo a passo coloca o MVP no ar com hospedagem gratuita no Firebase.

## 1) Pré‑requisitos locais
- Node.js 18+
- Conta Firebase ativa

## 2) Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

## 3) Login no Firebase
```bash
firebase login
```

## 4) Criar projeto no Firebase Console
- Acesse: https://console.firebase.google.com/
- Crie um projeto com nome "svcreative-mvp" (ou o nome que preferir)

## 5) Conectar o projeto ao app
```bash
firebase use --add
```
Selecione o projeto criado e dê o alias `default`.

## 6) Gerar build
```bash
npm run build
```

## 7) Deploy
```bash
firebase deploy --only hosting
```

## 8) Validar URL
- O Firebase retorna a URL do hosting ao final do deploy.
- Acesse a URL e valide as rotas do app:
  - `/admin`
  - `/admin/clients`
  - `/admin/deliveries`
  - `/client`

---

## Próximos passos (quando for ativar backend)
1. `firebase init` → selecionar Firestore e Functions.
2. Criar collections MVP (clients, services, deliveries, work_logs).
3. Adicionar regras de segurança por role.
4. Conectar o frontend ao Firestore (incremental).
