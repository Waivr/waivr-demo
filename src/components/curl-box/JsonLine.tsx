import { Box } from '@mui/system';
import { Json } from './Json';

type Props = {
  field: string;
  value: string;
  type: string;
  last?: boolean;
  first?: boolean;
  nested?: boolean;
  level?: number;
};

const styles = {
  jsonWrapper: {
    color: '#fff',
  },
  jsonNested: {
    color: '#fff',
    marginLeft: '10px',
  },
  jsonField: {
    color: '#3AE2DA',
    marginLeft: '10px',
  },
  jsonStringValue: {
    color: '#FC71DD',
  },
  jsonNumberValue: {
    color: '#629CFF',
  },
};

export const JsonLine = ({
  field,
  value,
  type,
  last,
  first,
  nested,
  level = 0,
}: Props) => (
  <Box
    component="div"
    sx={{ ...styles.jsonWrapper, marginLeft: `${level * 10}px` }}
  >
    {first && !nested ? <Box component="div">{'{'}</Box> : null}
    <Box component="span" sx={{ ...styles.jsonField }}>
      "{field}":
    </Box>
    {type === 'string' ? (
      <Box component="span" sx={{ ...styles.jsonStringValue }}>
        "{value}"{!last ? ',' : null}
      </Box>
    ) : null}
    {type === 'number' ? (
      <Box component="span" sx={{ ...styles.jsonNumberValue }}>
        {value}
        {!last ? ',' : null}
      </Box>
    ) : null}
    {type === 'object' ? (
      // Recurssion to add nested objects.
      // Exclude null values from being printed.
      <Box component="span" sx={{ ...styles.jsonNested }}>
        {Array.isArray(value) ? '[' : '{'}
        <Json json={JSON.stringify(value)} nested level={level + 1} />
        <Box component="span" sx={{ ...styles.jsonNested }}>
          {Array.isArray(value) ? ']' : '}'}
        </Box>
      </Box>
    ) : null}
    {last && !nested ? <Box component="div">{'}'}</Box> : null}
  </Box>
);
