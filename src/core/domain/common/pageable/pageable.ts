import { Sortable } from './sortable';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class Pageable {

  offset: number;

  pageNumber: number;

  pageSize: number;

  paged: boolean;

  sort: Sortable;

  unpaged: boolean;

  constructor(
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    sort: Sortable,
    unpaged: boolean,
    ) {

    this.offset = RequiredAttributes.requireNonNull(offset);
    this.pageNumber = RequiredAttributes.requireNonNull(pageNumber);
    this.pageSize = RequiredAttributes.requireNonNull(pageSize);
    this.paged = RequiredAttributes.requireNonNull(paged);
    this.sort = RequiredAttributes.requireNonNull(sort);
    this.unpaged = RequiredAttributes.requireNonNull(unpaged);
  
  }

}
