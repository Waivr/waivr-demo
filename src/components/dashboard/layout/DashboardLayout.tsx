import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@mui/material';
import styled from 'styled-components';
import AppSideBarNavigation from '../../common/sidebar/AppSideBarNavigation';
import AppSideBar from '../../common/sidebar/AppSideBar';

const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  })
);

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled.div`
    flex: 1 1 auto;
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #1212;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #243761aa;
        border-radius: 10px;
        border: 2px solid #F1F1F1;
    }
`;

const DashboardLayout = () => {


    const Element = useRef(null);

    const DashboardLayoutWrapper = experimentalStyled('div')(
        ({ theme }) => ({
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden',
            [theme.breakpoints.up('lg')]: {
                paddingLeft: 0,

            }

        })
    );

    return (
        <DashboardLayoutRoot>
            <AppSideBar>

                <AppSideBarNavigation
                    onMobileClose={() => false}
                />

            </AppSideBar>

            <DashboardLayoutWrapper>
                <DashboardLayoutContainer>
                    <DashboardLayoutContent ref={Element}>
                        <Outlet />
                    </DashboardLayoutContent>
                </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    );

};

export default DashboardLayout;
