import { Route } from 'react-router-dom';
import MerchantList from '../../merchant/MerchantList';

const MerchantRoutes = (

    <Route path="merchant">
        <Route path="" element={<MerchantList />} />
    </Route>
);

export default MerchantRoutes;
