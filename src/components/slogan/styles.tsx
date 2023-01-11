import styled from 'styled-components';

export const SectionContent = styled.section`
    background-color: #F8F8F8;
    display: none;
    flex-direction: column;
    align-items: center;
    overflow:hidden;

    .logo-container{
        display: flex;
        width: 100%;
        height: auto;
        max-width: 720px;
        max-height: 700px;
        overflow: hidden;
        border-radius: 15px;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        h2{
            width:95%;
            text-align: center;
            font-size: 28px;
            font-weight: 700;
            line-height: 35px;
            color: #fff;
        }
        img{
            position: relative;
            object-fit: cover;
            transform: translate(0, -62%) scale(1.2) rotate(17deg);
        }
    }

    
    @media screen and (min-width: 800px){
        display: flex;
    }
`;
