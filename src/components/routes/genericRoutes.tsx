import { Navigate, Route } from 'react-router-dom';
import NotFound from '../genericpages/NotFound';

const GenericRoutes = (
    <>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/app/404" />} />
    </>
);
export default GenericRoutes;
