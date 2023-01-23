import { Box } from '@mui/system';

type Props = {
  onClick: (bank: any) => void;
};

const styles = {
  header: {
    display: 'block',
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: '400',
    color: '#172836',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    marginBottom: '10px',
    icon: {
      'grid-column-start': '1',
      'grid-column-end': '1',
      img: {
        width: '100%',
      },
      width: '11px',
      height: '13px',
      marginRight: '12px',
    },
    content: {
      'grid-column-start': '2',
      'grid-column-end': '12',
      fontSize: '8px',
      lineHeight: '10px',
    },
    title: {
      fontWeight: '700',
    },
    text: {
      textAlign: 'left',
    },
  },
};

const banks = [
  {
    name: 'Bank of Westeros',
    url: 'www.bankofwesteros.com',
    logo: undefined,
  },
  {
    name: 'North Bank',
    url: 'www.northbank.com',
    logo: undefined,
  },
  {
    name: "King's Landing Financial",
    url: 'www.kingslandingfinancial.com',
    logo: undefined,
  },
  {
    name: 'Dorne Credit Union',
    url: 'www.dornecu.com',
    logo: undefined,
  },
  {
    name: 'Iron Islands Finanical',
    url: 'www.ironislandsfinancial.com',
    logo: undefined,
  },
  {
    name: 'Highgarden & Co',
    url: 'www.highgardenandco.com',
    logo: undefined,
  },
];

export const BankSelect = ({ onClick }: Props) => (
  <Box>
    <Box sx={{ ...styles.header }}>
      <Box>Select your bank</Box>
      <Box>Search</Box>
    </Box>
    {banks.map((bank) => (
      <Box sx={{ ...styles.list }} onClick={() => onClick(bank)}>
        <Box sx={{ ...styles.list.icon }}>
          <img src={bank.logo} alt={bank.name} />
        </Box>
        <Box sx={{ ...styles.list.content }}>
          <Box sx={{ ...styles.list.title }}>{bank.name}</Box>
          <Box sx={{ ...styles.list.text }}>{bank.url}</Box>
        </Box>
      </Box>
    ))}
  </Box>
);
