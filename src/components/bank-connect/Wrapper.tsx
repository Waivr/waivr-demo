import { Box } from '@mui/system';
import { AccountSelection } from './AccountSelection';
import { BankConnect } from './BankConnect';
import { BankLogin } from './BankLogin';
import { BankSelect } from './BankSelect';
import { Consent } from './Consent';
import { Success } from './Success';

const accountId = 'goadzaX3gAseb6eJGnGDTXAkka31rAi43rg38';
const institutionId = 'ins_56';
const token = 'link-sandbox-613f419b-f7a0-4410-9a4a-e5c44212f7a1';

type Props = {
  bankConnectScreen: number;
  handleBankConnect: () => void;
  onSuccess: (accountId: string, institutionId: string, token: string) => void;
};

export const BankConnectWrapper = ({
  bankConnectScreen,
  onSuccess,
  handleBankConnect,
}: Props) => (
  <Box sx={{ position: 'relative' }}>
    <BankConnect>
      {bankConnectScreen === 0 ? (
        <Consent onClick={() => handleBankConnect()} />
      ) : null}
      {bankConnectScreen === 1 ? (
        <BankSelect onClick={() => handleBankConnect()} />
      ) : null}
      {bankConnectScreen === 2 ? (
        <BankLogin onClick={() => handleBankConnect()} />
      ) : null}
      {bankConnectScreen === 3 ? (
        <AccountSelection
          onClick={() => {
            onSuccess(accountId, institutionId, token);
            handleBankConnect();
          }}
        />
      ) : null}
      {bankConnectScreen === 4 ? (
        <Success onClick={() => handleBankConnect()} />
      ) : null}
    </BankConnect>
  </Box>
);
