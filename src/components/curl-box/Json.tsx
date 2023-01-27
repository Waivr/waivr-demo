import { Box } from '@mui/system';
import { JsonLine } from './JsonLine';

type Props = {
  json: string;
  nested?: boolean;
  level?: number;
};

const styles = {
  color: '#3AE2DA',
  marginLeft: '10px',
};

const tryParseJson = (json: string): object | string => {
  let result = '';
  try {
    result = JSON.parse(json);
  } catch {
    result = json;
  }

  return result;
};

export const Json = ({ json, nested, level }: Props) => {
  const parsed = tryParseJson(json);

  if (typeof parsed === 'string') {
    return (
      <Box component="span" sx={{ ...styles }}>
        {parsed}
      </Box>
    );
  }
  return (
    <>
      {Object.keys(parsed).map((key, index) => {
        const first = index === 0;
        const last = index === Object.keys(parsed).length - 1;
        const prop = Object.keys(parsed)[index];
        const type = typeof parsed[prop as keyof object];
        const value = parsed[prop as keyof object];

        return (
          <JsonLine
            key={key}
            field={prop}
            value={value}
            type={type}
            last={last}
            first={first}
            nested={nested}
            level={level}
          />
        );
      })}
    </>
  );
};
