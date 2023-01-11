import { Sortable } from './sortable';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class Page<T> {

  content: T[];

  empty: boolean;

  first: boolean;

  last: boolean;

  number: number;

  numberOfElements: number;

  size: number;

  sort: Sortable;

  constructor(
    content: T[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    size: number,
    sort: Sortable,
    ) {

    this.content = RequiredAttributes.requireNonNull(content);
    this.empty = RequiredAttributes.requireNonNull(empty);
    this.first = RequiredAttributes.requireNonNull(first);
    this.last = RequiredAttributes.requireNonNull(last);
    this.number = RequiredAttributes.requireNonNull(number);
    this.numberOfElements = RequiredAttributes.requireNonNull(numberOfElements);
    this.size = RequiredAttributes.requireNonNull(size);
    this.sort = RequiredAttributes.requireNonNull(sort);
  
  }

}
