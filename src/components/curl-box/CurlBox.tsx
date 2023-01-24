import { Box } from '@mui/system';
import { useEffect, useRef } from 'react';
import AppTheme from '../common/global/AppTheme';

export interface CurlLog {
  id?: string;
  title: string;
  request?: string;
  response?: string;
  isLoading?: boolean;
}

export type Props = {
  logs: Array<CurlLog>;
  autoScroll?: boolean;
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
    [AppTheme.breakpoints.down('md')]: {
      padding: '20px',
    },
  },
  title: {
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '5px',
    textTransform: 'uppercase',
    fontWeight: '700',
    scrollMarginTop: '15px',
  },
  request: {
    color: '#E2FF62',
    marginBottom: '20px',
    pre: {
      whiteSpace: 'pre-wrap',
    },
  },
  response: {
    color: '#7377E4',
    pre: {
      whiteSpace: 'pre-wrap',
    },
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

const tryParseJson = (json: string): string => {
  let result = '';
  try {
    result = JSON.stringify(JSON.parse(json), null, 2);
  } catch {
    /* empty */
  }

  return result;
};

export const CurlBox = ({ logs, autoScroll }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const scroll = () => {
    if (ref?.current != null && autoScroll) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    scroll();
  });

  return (
    <Box sx={{ ...styles.wrapper }}>
      {logs.map((log) => (
        <>
          <Box sx={{ ...styles.title }} ref={ref}>
            {log.title}
          </Box>
          <Box sx={{ ...styles.request }}>
            <pre>{log.request}</pre>
          </Box>
          <Box sx={{ ...styles.response }}>
            {log.response != null ? (
              <pre>
                {log.response != null
                  ? tryParseJson(log.response)
                  : log.response}
              </pre>
            ) : null}
            {log.isLoading ? <Box sx={{ ...styles.loading }} /> : null}
          </Box>
        </>
      ))}
    </Box>
  );
};
