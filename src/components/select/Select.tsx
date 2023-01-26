import { Box } from '@mui/system';

export type Option = {
  label: string;
  value: string;
  selected?: boolean;
};

type Props = {
  options: Array<Option>;
  name: string;
  disabled: boolean;
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
    borderBottomColor: 'text.disabled',
    borderBottomWdith: '2px',
    borderBottomStyle: 'solid',
    '&.selected': {
      color: 'text.primary',
      borderBottomColor: 'text.primary',
    },
  },
  div: {
    display: 'inline-block',
    ':not(:first-of-type)': {
      marginLeft: '40px',
    },
  },
};

// TODO - handle select logic off clicking the label

export const Select = ({ name, options = [], disabled, onSelect }: Props) => (
  <Box sx={{ ...styles }}>
    {options.map((o: Option) => (
      <Box key={o.value} onClick={() => (!disabled ? onSelect(o) : undefined)}>
        <label className={o.selected && !disabled ? 'selected' : ''}>
          {o.label}
        </label>
        <input
          type="radio"
          name={name}
          value={o.value}
          checked={o.selected || false}
          onChange={() => undefined}
          disabled={disabled}
        />
      </Box>
    ))}
  </Box>
);
