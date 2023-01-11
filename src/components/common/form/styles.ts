import styled from 'styled-components';

const Wrapper = styled.div`

    a{
        text-decoration: underline;
        margin: 30px 0 39px 0;
        font-size: 19px;
        color: #0984e3;
    }
`;

const FormContent = styled.div`
    :first-child {
        margin-top: 15%;
    };
    
    & > div:first-child {
        margin-bottom: 16px;
    }
`;

const SubmitInputButton = styled.input`
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    width: 100%;
    background: #243761;
    padding: 18px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    transition: .3s ease-out;
    margin-top: ${(props: { mt: any; }) => props?.mt || 0};
    :hover {
        background: #2c457cda;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', 'Roboto';
    border-radius: 10px;
    overflow-x: hidden;
`;

const Content = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    @media screen and (min-width: 800px){
        grid-template-columns: 1fr 1fr;
    }
`;

const SectionForm = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 4rem;

    background: #fff;

    label{
        font-size: 16px;
    }

    .titleForm-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;
        h1{
            font-size: 35px;
            color: #243761;
        }
        span{
            font-size: 16px;
            font-weight: 500;
            a{
                text-decoration: underline;
                color: #74b9ff;
            }
        }
    }
    
    @media screen and (min-width: 800px){
        .titleForm-container{
            align-items: flex-start;
        }
    }
    
`;

export {
    Wrapper,
    FormContent,
    SubmitInputButton,
    Container,
    Content,
    SectionForm
};
