import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    color: white;
    width: 100%;
    font-family: 'Montserrat';
    font-size: .9rem;
    font-weight: 500;
    margin: 5px 0 0 0;
    padding: 2px 0;
    opacity: .9;
`;

const Icon = styled.div`
    width: 23px;
    height: 23px;
    margin-right: 10px;
`;

const Text = styled.span`
    white-space: nowrap;
    overflow: hidden;
    max-width: 15ch;
    text-overflow: ellipsis;
    text-transform: ${(haveIcon: any) => !haveIcon && 'uppercase'};
    font-size: ${(haveIcon: any) => !haveIcon && '.78rem'};
`;

export {
    Container,
    Icon,
    Text
};
