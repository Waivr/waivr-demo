import { Box } from '@mui/system';
import { useEffect, useRef } from 'react';
import AppTheme from '../common/global/AppTheme';
import { CurlLine } from './CurlLine';
import { Json } from './Json';

export interface CurlLog {
  id?: string;
  title: string;
  request?: string;
  response?: string;
  isLoading?: boolean;
}

export type Props = {
  logs: Array<CurlLog>;
};

const styles = {
  wrapper: {
    backgroundColor: 'primary.dark',
    borderRadius: '20px',
    padding: '10px 4px 30px 30px',
    fontFamily: 'Inconsolata',
    [AppTheme.breakpoints.down('sm')]: {
      padding: '20px',
      fontSize: '10px',
    },
  },
  content: {
    paddingRight: '10px',
    maxHeight: '430px',
    overflowY: 'scroll',
    scrollbarWidth: 'auto',
    scrollbarColor: '#5E6870 primary.dark',
    '::-webkit-scrollbar': {
      width: '10px',
    },
    '::-webkit-scrollbar-track': {
      background: 'primary.dark',
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundClip: 'padding-box',
      backgroundColor: '#5E6870',
      borderRadius: '10px',
      border: '3px solid primary.dark',
    },
  },
  title: {
    backgroundColor: 'background.default',
    margin: '20px 0',
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
    color: '#73DFDA',
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
      webkitAnimation: 'ellipsis steps(4,end) 1500ms infinite',
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

export const CurlBox = ({ logs }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const scroll = () => {
    if (ref?.current != null) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    scroll();
  });
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Box sx={{ ...styles.content }}>
        {logs.map((log) => (
          <Box key={log.id}>
            <Box sx={{ ...styles.title }} ref={ref}>
              {log.title}
            </Box>
            <Box sx={{ ...styles.request }}>
              <CurlLine curl={log.request ?? ''} />
            </Box>
            <Box sx={{ ...styles.response }}>
              {log.response != null ? <Json json={log.response} /> : null}
              {log.isLoading ? <Box sx={{ ...styles.loading }} /> : null}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
