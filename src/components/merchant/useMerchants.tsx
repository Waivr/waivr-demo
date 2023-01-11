import { useEffect } from 'react';
import MerchantFacade from './MerchantFacade';
import { MerchantSearchRequest } from '../../core/domain/merchant/merchantSearchRequest';
import { mapMerchantViews, MerchantView } from './view/merchantView';

const useMerchants = (
    merchants: MerchantView[],
    setMerchants: (merchants: MerchantView[]) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void
) => {

    useEffect(() => {

        const fetchData = async () => {

            if (!loading) {

                return;

            }

            const firstLoadMerchant = await MerchantFacade
                .instance()
                .search(MerchantSearchRequest.firstNElements(100));
            const merchantViews = mapMerchantViews(firstLoadMerchant.content);
            setMerchants(merchantViews);
            setLoading(false);

        };

        fetchData();

    }, [merchants, loading]);

};

export default useMerchants;
