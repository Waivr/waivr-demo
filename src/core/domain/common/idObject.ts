import RequiredAttributes from '../../paramutils/requiredAttributes';

export class IdObject<T> {

  identifier: T;

  createDate: Date;

  updateDate: Date;

  constructor(identifier: T, createDate: Date, updateDate: Date) {

    this.identifier = RequiredAttributes.requireNonNull(identifier);
    this.createDate = RequiredAttributes.requireNonNull(createDate);
    this.updateDate = RequiredAttributes.requireNonNull(updateDate);
  
  }

}
