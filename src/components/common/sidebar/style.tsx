import styled from 'styled-components';
import { Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 1rem;
    font-family: 'Montserrat';
    transition: 0.2s ease-in;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: #1212;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(theme: { mainColor: any; }) => theme.mainColor};
    }
`;

export {
    Container,
};
