import styled from 'styled-components';
import React from 'react';

const Logo = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-end;
  justify-content: center;

  img {
    transform: scale(.8) translateY(5%);
  }
`;

const LogoComponent = ({ children } : JSX.ElementChildrenAttribute): JSX.Element => <Logo>{children}</Logo>;

export default LogoComponent;
