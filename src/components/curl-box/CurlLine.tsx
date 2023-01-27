import { Box } from '@mui/system';

type Props = {
  curl: string;
};

const styles = {
  curlValue: {
    color: 'yellow',
  },
  curlText: {
    color: '#fff',
  },
};

export const CurlLine = ({ curl }: Props) => {
  let lines: Array<string> = [];
  if (curl != null && curl.length > 0) {
    lines = curl.split("'");
  }

  const arr = [];
  for (let i = 0; i < lines.length; i++) {
    if (i % 2) {
      arr.push(
        <Box component="span" sx={{ ...styles.curlValue }}>
          '{lines[i].replaceAll('&apos;', "\\'")}'
        </Box>
      );
    } else {
      arr.push(
        <Box component="span" sx={{ ...styles.curlText }}>
          {lines[i]}
        </Box>
      );
    }
  }

  return <div>{arr}</div>;
};
