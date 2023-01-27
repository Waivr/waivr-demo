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

  // These are lines that are simply text logs
  if (lines.length === 1) {
    return (
      <>
        {curl.split('\n').map((l) => (
          <Box key={l} component="div" sx={{ ...styles.curlValue }}>
            {l}
          </Box>
        ))}
      </>
    );
  }

  for (let i = 0; i < lines.length; i++) {
    if (i % 2) {
      arr.push(
        <Box key={i} component="span" sx={{ ...styles.curlValue }}>
          '{lines[i].replaceAll('&apos;', "\\'")}'
        </Box>
      );
    } else {
      arr.push(
        <Box key={i} component="span" sx={{ ...styles.curlText }}>
          {lines[i]}
        </Box>
      );
    }
  }

  return <div>{arr}</div>;
};
