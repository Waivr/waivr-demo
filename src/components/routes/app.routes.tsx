import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../dashboard/layout/DashboardLayout';
import MerchantRoutes from './merchant/merchantRoutes';
import GenericRoutes from './genericRoutes';

const PrivateRoute = () => (

    <Routes>

        <Route path="/" element={<Navigate to="/app/merchant" />} />

        <Route path="app" element={<DashboardLayout />}>
            {GenericRoutes}
            {MerchantRoutes}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

const AppRoutes = () => (<PrivateRoute />);

export default AppRoutes;
