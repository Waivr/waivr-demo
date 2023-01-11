import RequiredAttributes from '../../paramutils/requiredAttributes';
import { FirstName } from './firstName';
import { LastName } from './lastName';

export class PersonName {

  firstName: FirstName;

  lastName: LastName;

  constructor(
    firstName: FirstName,
    lastName: LastName
  ) {

    this.firstName = RequiredAttributes.requireNonNull(firstName);
    this.lastName = RequiredAttributes.requireNonNull(lastName);

  }

  public fullName(): string {

    return `${this.firstName.value} ${this.lastName.value}`;
  
  }

  public static of(firstName: string, lastName: string) {

    const first = new FirstName(firstName);
    const last = new LastName(lastName);
    return new PersonName(first, last);

  }

}
