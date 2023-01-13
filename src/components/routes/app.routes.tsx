import { Navigate, Route, Routes } from 'react-router-dom';
import DemoLayout from '../demo/layout/DemoLayout';
import GenericRoutes from './genericRoutes';

const PrivateRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/demo" />} />

    <Route path="demo" element={<DemoLayout />}>
      {GenericRoutes}
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

const AppRoutes = () => <PrivateRoute />;

export default AppRoutes;
