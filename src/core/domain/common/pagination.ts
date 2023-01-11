import NumberUtils from '../../paramutils/numberUtils';

export class Pagination {

  offset: number;

  limit: number;


  constructor(
    offset: number,
    limit: number,
  ) {

    this.offset = NumberUtils.requireNonNegative(offset);
    this.limit = NumberUtils.requirePositive(limit);

  }

}
