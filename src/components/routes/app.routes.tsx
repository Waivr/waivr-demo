import { Route, Routes } from 'react-router-dom';
import Demo from '../demo/Demo';

const PrivateRoute = () => (
  <Routes>
    <Route path="*" element={<Demo />} />
  </Routes>
);

const AppRoutes = () => <PrivateRoute />;

export default AppRoutes;
