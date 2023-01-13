import { styled } from '@mui/system';

const AppGlobalStyles = styled('div')(
    () => `
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    },
    html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100vh',
        width: '100%'
    },
    body: {
        backgroundColor: '#f4f6f8',
        height: '100vh',
        width: '100%'
    },
    a: {
        textDecoration: 'none'
    },
    '#root': {
        height: '100vh',
        width: '100%'
    }
  `
);

export default AppGlobalStyles;
