import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, List } from '@mui/material';
import { DashboardMenuProps } from './AppSideBarNavigation';
import { Container } from './style';
import StyleConstant from '../global/StyleConstant';
import AppSideBarNavItem from './navitem/AppSideBarNavItem';
import AppSideBarSection from './AppSideBardSection';
import Logo from '../logo';

type Props = {
    dashboard: DashboardMenuProps,
    handleSidebar: (value: boolean) => void
}
const AppSideBarContent = ({
    dashboard, handleSidebar
}: Props) => {

    const [showDealMenu, setShowDealMenu] = useState(true);

    return (
        <Container
            sx={{ background: `${StyleConstant.mainColor}` }}
            className="container"
            data-testid="container-contentSidebar"
        >
            <AppSideBarSection
                header={dashboard.header}
                section={dashboard.section}
            />

            <Box
                sx={{ p: 0, py: 2, mr: 0 }}
                data-testid="listSections"
            >
                <AppSideBarNavItem
                    text="Merchants"
                    testId="app-sidebar-content-merchant"
                />
                <List>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            fontSize: '.9rem',
                            color: 'white',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                        onClick={() => setShowDealMenu((open) => !open)}
                        data-testid="dealSectionMenu"
                    >
                        <Box
                            sx={{ mr: 1, py: 0.5, pb: 1 }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <img
                                src="/waivr-demo/assets/sidebar/gallery.png"
                                alt="icon"
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    marginRight: '8px'
                                }}
                            />
                            All Merchants
                        </Box>
                    </Box>
                </List>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
                <RouterLink to="/dashboard">
                    <Logo width="160px" src="/waivr-demo/assets/logo.svg" />
                </RouterLink>
            </Box>
        </Container>
    );

};
export default AppSideBarContent;
