import { createContext, useContext, useState } from 'react';

type Data = {
    data: any,
    show: boolean
}
const DEFAULT_CONTEXT = {
    showDetails: { data: {}, show: false },
    setShowDetails(): void {

     console.log('setShowDetails');

    },
};

interface AppSideBarDetailsProps {
    isMobileNavOpen?: boolean,
    setMobileNavOpen?: React.Dispatch<React.SetStateAction<boolean>>,
    showDetails: Data,
    setShowDetails: (value: Data) => void,
}

const MarketplaceContext = createContext<AppSideBarDetailsProps>(DEFAULT_CONTEXT);

type Props = {
    children: any;
}

const AppSideBarDetailsProvider = ({ children }: Props) => {

    const [isMobileNavOpen, setMobileNavOpen] = useState<boolean>(true);
    const [showDetails, setShowDetails] = useState({ data: {} as any, show: false });
    
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        isMobileNavOpen,
        setMobileNavOpen,
        showDetails,
        setShowDetails,
    };
    return (
        <MarketplaceContext.Provider value={value}>
            {children}
        </MarketplaceContext.Provider>
    );

};

const useAppSideBarDetails = (): AppSideBarDetailsProps => {

    const context = useContext<AppSideBarDetailsProps>(MarketplaceContext);
    const {
        isMobileNavOpen,
        setMobileNavOpen,
        showDetails,
        setShowDetails,
    } = context;

    return {
        isMobileNavOpen,
        setMobileNavOpen,
        showDetails,
        setShowDetails,
    };

};

export {
    AppSideBarDetailsProvider,
    useAppSideBarDetails
};
