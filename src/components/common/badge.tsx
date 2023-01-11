import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`

    .signing, .error, .success {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 32px;
    }
    .success {
        background: #d4edda;
        color: #155724;
    }

    .error{
        background: #f8d7da;
        color: #960505;
    }

    .signing{
        background: rgb(41, 128, 185, .3);
        color: rgb(41, 128, 185)

    }

`;

type Props = {
    className: string;
    message: string;
}
const Badge = ({ className, message } : Props) => (
        <Container>
            <div className={className} data-testid="messageRequest"> {message} </div>
        </Container>
    );

export default Badge;
