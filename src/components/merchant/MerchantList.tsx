import { useState } from 'react';
import { Box } from '@mui/material';
import { Container, Content } from './styles';
import { MerchantView } from './view/merchantView';
import TablePaginationComponent, { RowData, RowDataItem, RowHeader } from '../common/table/TablePagination';
import useMerchants from './useMerchants';

const rowHeader: RowHeader = {
    headers: [
        'uuid',
        'Create Date',
        'Legal Name',
        'Email',
        'Business Address',
    ]
};

const buildRowDataItem = (merchantView: MerchantView): RowDataItem => {

    const columns: string[] = [
        merchantView.uuid,
        merchantView.createDate.toDateString(),
        merchantView.legalName,
        merchantView.email,
        merchantView.address.fullAddress(),
    ];
    return {
        columns
    };

};

const buildRowData = (merchantViews: MerchantView[]): RowData => {

    const rows = merchantViews
        .map((merchantView) => buildRowDataItem(merchantView));

    return {
        rows
    };

};

const MerchantList = () => {

    const [merchants, setMerchants] = useState<MerchantView[]>([] as MerchantView[]);
    const [loading, setLoading] = useState<boolean>(true);


    useMerchants(
        merchants,
        setMerchants,
        loading,
        setLoading
    );

    const rowData = buildRowData(merchants);

    return (

        <Container
            style={{
                width: '100%',
                paddingLeft: '250px'
            }}
        >
            <Content>
                <>
                    <Box
                        sx={{
                            ml: 6,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box>
                            <h1>Merchants</h1>
                            <span style={{ color: '#757382' }}>Check merchants in Waivr</span>
                        </Box>
                    </Box>

                    <TablePaginationComponent rowHeaders={rowHeader} rowData={rowData} />
                </>
            </Content>
        </Container>
    );

};

export default MerchantList;

