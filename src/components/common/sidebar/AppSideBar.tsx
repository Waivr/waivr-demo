import React from 'react';
import { Box } from '@mui/material';
import StyleConstant from '../global/StyleConstant';

type Props = {
    children: any;
}
const AppSideBar: React.FC<Props> = ({ children }) => (
    <Box
        sx={{
            background: `${StyleConstant.mainColor}`,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'auto',
            padding: '25px 0',
            fontFamily: 'Montserrat',
            transition: '.2s ease-in',
        }}
    >
        {children}
    </Box>
);



export default AppSideBar;
