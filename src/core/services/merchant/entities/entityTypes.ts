import { BPagination } from '../../common/entities/commonTypes';
import { StringOptionalType } from '../../../domain/common/genericTypes';

export interface BMerchantSearchRequest {
  merchantUid: StringOptionalType;
  legalName: StringOptionalType;
  pagination: BPagination;
}
