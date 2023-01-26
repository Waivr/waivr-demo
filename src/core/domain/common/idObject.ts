import RequiredAttributes from '../../paramutils/requiredAttributes';

export class IdObject<T> {
  identifier: T;

  createDate: Date;

  updateDate: Date;

  rawJson: string;

  constructor(identifier: T, createDate: Date, updateDate: Date, rawJson: string) {
    this.identifier = RequiredAttributes.requireNonNull(identifier);
    this.createDate = RequiredAttributes.requireNonNull(createDate);
    this.updateDate = RequiredAttributes.requireNonNull(updateDate);
    this.rawJson = RequiredAttributes.requireNonBlank(rawJson);
  }
}
