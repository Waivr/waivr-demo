import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background: ${(theme: { background: any; }) => theme.background};
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-weight: 500;
    transition: .2s ease-in;
    position: absolute;
    right: 0;
    padding: 0 10px 0 0;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar {
        width: 10px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #1212;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #243761aa;
        border-radius: 10px;
        border: 2px solid #F1F1F1;
    }

    // badge class
    .draft {
        color: #FFFFFF;
        background: #757382;
    }
    .completed {
        color: #2A273A;
        background:#5FD58C;
    }
    .cancelled {
        color: #FFFFFF;
        background: #FF4A4A;
    }
    .opened {
        color: #2A273A;
        background: #68BBE7;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: ${(theme: { maxWidth: any; }) => theme.maxWidth};
    min-height: 100%;
    flex-direction: column;
    padding: 0px 10px 10px 0;
    

    @media screen and (min-width: 800px) {
        padding: 0px;
    }

`;

export {
    Container,
    Content
};
