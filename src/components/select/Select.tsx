import { Box } from '@mui/system';

type Option = {
  label: string;
  value: string;
  selected?: boolean;
};

type Props = {
  options: Array<Option>;
  name: string;
};

const styles = {
  input: { appearance: 'none', width: 0, margin: 0 },
  label: {
    paddingLeft: '10px',
    paddingRight: '10px',
    cursor: 'pointer',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#969B9F',
    borderBottomColor: '#D9D9D9',
    borderBottomWdith: '2px',
    borderBottomStyle: 'solid',
    '&.selected': {
      color: '#172836',
      borderBottomColor: '#172836',
    },
  },
  div: {
    display: 'inline-block',
    ':not(:first-child)': {
      marginLeft: '40px',
    },
  },
};

// TODO - handle select logic off clicking the label

export const Select = ({ name, options = [] }: Props) => (
  <Box sx={{ ...styles }}>
    {options.map((o: Option) => (
      <Box key={o.value}>
        <label className={o.selected ? 'selected' : ''}>{o.label}</label>
        <input type="radio" name={name} value={o.value} checked={o.selected} />
      </Box>
    ))}
  </Box>
);
