import { BNominalAddress } from '../../common/entities/commonTypes';

export interface BCustomerCreateRequest {
  merchantUid: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  address: BNominalAddress | null;
}
