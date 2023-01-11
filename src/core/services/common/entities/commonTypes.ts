import { StringOptionalType } from '../../../domain/common/genericTypes';

export interface BNominalAddress {
  line1: string;
  line2?: StringOptionalType;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface BPagination {
  offset: number;
  limit: number;
}
