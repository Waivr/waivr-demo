import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@mui/material';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 | Waivr </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        marginTop: '3%',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          We're working
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle1"
        >
          Don't worry, we will release this page for you
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src="/waivr-demo/assets/not_found.png"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
