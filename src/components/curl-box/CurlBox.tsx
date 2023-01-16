import { Box } from '@mui/system';

type Props = {
  title: string;
  request: string;
  response: string;
  isLoading: boolean;
};

const styles = {
  wrapper: {
    backgroundColor: '#172836',
    maxHeight: '430px',
    borderRadius: '20px',
    padding: '30px',
    fontFamily: 'Inconsolata',
    overflowY: 'scroll',
    scrollbarWidth: 'auto',
    scrollbarColor: '#5E6870 #172836',
    '::-webkit-scrollbar': {
      width: '16px',
    },
    '::-webkit-scrollbar-track': {
      background: '#172836',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#5E6870',
      borderRadius: '20px',
      border: '3px solid #172836',
    },
  },
  title: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '5px',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  request: {
    color: '#E2FF62',
    marginBottom: '20px',
  },
  response: {
    color: '#7377E4',
  },
  loading: {
    fontSize: '30px',
    lineHeight: '30px',
    ':after': {
      overflow: 'hidden',
      display: 'inline-block',
      verticalAlign: 'bottom',
      '-webkit-animation': 'ellipsis steps(4,end) 1500ms infinite',
      animation: 'ellipsis steps(4,end) 1500ms infinite',
      // eslint-disable-next-line no-octal-escape
      content: '"\\2026"',
      width: '0px',
    },
    '@keyframes ellipsis': {
      to: {
        width: '18px',
      },
    },
    '@-webkit-keyframes ellipsis': {
      to: {
        width: '18px',
      },
    },
  },
};

export const CurlBox = ({ title, request, response, isLoading }: Props) => (
  <Box sx={{ ...styles.wrapper }}>
    <Box sx={{ ...styles.title }}>{title}</Box>
    <Box sx={{ ...styles.request }}>{request}</Box>
    <Box sx={{ ...styles.response }}>
      {response != null ? (
        <pre>
          {response != null
            ? JSON.stringify(JSON.parse(response), null, 2)
            : response}
        </pre>
      ) : null}
      {isLoading ? <Box sx={{ ...styles.loading }} /> : null}
    </Box>
  </Box>
);
