import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class Sortable {

  empty: boolean;

  sorted: boolean;

  unsorted: boolean;

  constructor(
    empty: boolean,
    sorted: boolean,
    unsorted: boolean,
    ) {

    this.empty = RequiredAttributes.requireNonNull(empty);
    this.sorted = RequiredAttributes.requireNonNull(sorted);
    this.unsorted = RequiredAttributes.requireNonNull(unsorted);
  
  }

}
