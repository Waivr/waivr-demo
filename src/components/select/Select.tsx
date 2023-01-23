import { Box } from '@mui/system';

export type Option = {
  label: string;
  value: string;
  selected?: boolean;
};

type Props = {
  options: Array<Option>;
  name: string;
  onSelect: (option: Option) => void;
};

const styles = {
  height: '30px',
  input: { appearance: 'none', width: 0, margin: 0 },
  label: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '5px',
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

export const Select = ({ name, options = [], onSelect }: Props) => (
  <Box sx={{ ...styles }}>
    {options.map((o: Option) => (
      <Box key={o.value} onClick={() => onSelect(o)}>
        <label className={o.selected ? 'selected' : ''}>{o.label}</label>
        <input type="radio" name={name} value={o.value} checked={o.selected} />
      </Box>
    ))}
  </Box>
);
