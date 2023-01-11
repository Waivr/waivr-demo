import { useId } from 'react';
import { Box, List } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSideBarDetails } from './AppSideBarDetails';
import AppSideBarNavItem from './navitem/AppSideBarNavItem';

type Props = {
    header: {
        title: string,
        testId: string
    };
    section: any;
}
const AppSideBarSection: React.FC<Props> = ({ header, section }: Props) => {

    const { isMobileNavOpen } = useAppSideBarDetails();

    return (
        <Box
            sx={{ p: 0, py: 2, mr: 0 }}
            style={{ opacity: isMobileNavOpen ? 1 : 0 }}
            data-testid="container"
        >
            <AppSideBarNavItem
                text={header.title}
                testId={header.testId}
            />
        
            <List data-testid="list">
                {section.map((item: typeof section) => (
                    item.href
                        ? (
                            <Link to={item.href} key={useId()}>
                                <AppSideBarNavItem
                                    icon={item.icon}
                                    text={item.title}
                                    testId={item.title}
                                />
                            </Link>
                        )
                        : (
                            <AppSideBarNavItem
                                key={useId()}
                                icon={item.icon}
                                text={item.title}
                                testId={item.title}
                                
                            />
                        )
                    
                ))}
            </List>
        </Box>
    );

};

export default AppSideBarSection;
