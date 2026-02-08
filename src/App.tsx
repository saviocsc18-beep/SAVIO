import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminClients from './pages/admin/AdminClients';
import AdminClientDetail from './pages/admin/AdminClientDetail';
import AdminClientRegistry from './pages/admin/AdminClientRegistry';
import AdminServices from './pages/admin/AdminServices';
import AdminDeliveries from './pages/admin/AdminDeliveries';
import AdminWorkspace from './pages/admin/AdminWorkspace';
import ClientLogin from './pages/client/ClientLogin';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientServices from './pages/client/ClientServices';
import ClientKpis from './pages/client/ClientKpis';
import ClientDeliveries from './pages/client/ClientDeliveries';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/clients" element={<AdminClients />} />
      <Route path="/admin/clients/registry" element={<AdminClientRegistry />} />
      <Route path="/admin/clients/:clientId" element={<AdminClientDetail />} />
      <Route path="/admin/services" element={<AdminServices />} />
      <Route path="/admin/workspace" element={<AdminWorkspace />} />
      <Route path="/admin/deliveries" element={<AdminDeliveries />} />

      <Route path="/client/login" element={<ClientLogin />} />
      <Route path="/client" element={<ClientDashboard />} />
      <Route path="/client/services" element={<ClientServices />} />
      <Route path="/client/kpis" element={<ClientKpis />} />
      <Route path="/client/deliveries" element={<ClientDeliveries />} />
    </Routes>
  );
};

export default App;
