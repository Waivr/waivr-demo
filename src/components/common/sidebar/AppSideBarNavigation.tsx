import {
    Drawer
} from '@mui/material';
import AppSideBarContent from './AppSideBarContent';


export interface DashboardSidebarProps {
    onMobileClose: any;
}

export interface DashboardMenuProps {
    header: {
        title: string,
        testId: string
    },
    section: [
        {
            title: string,
            icon: JSX.Element
        }
    ]
}

const AppSideBarNavigation = ({ onMobileClose }: DashboardSidebarProps) => {

    const handleSidebar = (value: boolean) => {

        console.log('handle SideBar');

    };

    const dashboard: DashboardMenuProps = {
        header: {
            title: 'Dashboard',
            testId: 'app-sidebar-navigation-dashboard'
        },
        section: [
            {
                title: 'Overview',
                icon: (
                    <img src="/waivr-demo/assets/sidebar/dashboard.png" alt="icon" />
                )
            },
        ]
    };

    return (
        <div data-testid="container">

            <Drawer
                anchor="left"
                onClose={onMobileClose}
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: 235,
                        overflow: 'hidden'
                    }
                }}
            >
                <AppSideBarContent
                    dashboard={dashboard}
                    handleSidebar={handleSidebar}
                />

            </Drawer>
            <Drawer
                anchor="left"
                open
                variant="persistent"
                PaperProps={{
                    sx: {
                        transition: '.2s ease-in',
                        width: 235,
                        height: '100%',
                        border: 'none',
                        overflow: 'hidden'
                    }
                }}
            >
                <AppSideBarContent
                    dashboard={dashboard}
                    handleSidebar={handleSidebar}
                />
            </Drawer>
        </div>
    );

};

export default AppSideBarNavigation;
