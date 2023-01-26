import { Box } from '@mui/system';
import BankOfWesterosLogo from './assets/bank-of-westeros.png';
import NorthBankLogo from './assets/north-bank.png';
import KingsLandingLogo from './assets/kings-landing-financial.png';
import DorneCreditUnionLogo from './assets/dorne-credit-union.png';
import IronIslandsFinancialLogo from './assets/iron-islands-financial.png';
import HighgardenAndCoLogo from './assets/highgarden-and-co.png';
import SearchIcon from './assets/search.png';

type Props = {
  onClick: (bank: any) => void;
};

const styles = {
  padding: '28px 24px 15px 24px',
  header: {
    display: 'block',
    color: '#172836',
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 700,
    marginTop: '5px',
    marginBottom: '20px',
  },
  search: {
    input: {
      backgroundImage: `url(${SearchIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      backgroundSize: '30px',
      width: '100%',
      fontSize: '16px',
      padding: '12px 20px 12px 40px',
      border: '1px solid #F0F0F0',
      marginTop: '12px',
    },
  },
  list: {
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #F0F0F0',
    ':last-child': {
      borderBottom: 'none',
    },
    logo: {
      gridColumnStart: '0',
      gridColumnEnd: '1',
      img: {
        width: '100%',
      },
      width: '50px',
      height: '50px',
    },
    content: {
      gridColumnStart: '2',
      gridColumnEnd: '12',
      lineHeight: '10px',
    },
    title: {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: '700',
    },
    text: {
      fontSize: '13px',
      lineHeight: '14px',
      textAlign: 'left',
      color: '#7C7C7C',
    },
  },
};

const banks = [
  {
    name: 'Bank of Westeros',
    url: 'www.bankofwesteros.com',
    logo: BankOfWesterosLogo,
  },
  {
    name: 'North Bank',
    url: 'www.northbank.com',
    logo: NorthBankLogo,
  },
  {
    name: "King's Landing Financial",
    url: 'www.kingslandingfinancial.com',
    logo: KingsLandingLogo,
  },
  {
    name: 'Dorne Credit Union',
    url: 'www.dornecu.com',
    logo: DorneCreditUnionLogo,
  },
  {
    name: 'Iron Islands Finanical',
    url: 'www.ironislandsfinancial.com',
    logo: IronIslandsFinancialLogo,
  },
  {
    name: 'Highgarden & Co',
    url: 'www.highgardenandco.com',
    logo: HighgardenAndCoLogo,
  },
];

export const BankSelect = ({ onClick }: Props) => (
  <Box sx={{ ...styles }}>
    <Box sx={{ ...styles.header }}>
      <Box>Select your bank</Box>
      <Box sx={{ ...styles.search }}>
        <input placeholder="Search..." type="text" />
      </Box>
    </Box>
    {banks.map((bank) => (
      <Box
        key={bank.name}
        sx={{ ...styles.list }}
        onClick={() => onClick(bank)}
      >
        <Box sx={{ ...styles.list.logo }}>
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
