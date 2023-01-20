import { CustomerCreateArgs } from '../../../domain/customer/customerCreateArgs';
import { BCustomerCreateRequest } from '../entities/entityTypes';
import { MappingException } from '../../../domain/exceptions/mappingException';
import NominalAddressMapper from '../../common/mapper/nominalAddressMapper';
import { Customer } from '../../../domain/customer/customer';
import { CustomerIdentifier } from '../../../domain/customer/customerIdentifier';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { Email } from '../../../domain/common/contact/email';
import { PersonName } from '../../../domain/person/personName';
import { PhoneNumber } from '../../../domain/common/contact/phoneNumber';

const mapCustomer = (customer: any): Customer => {
  const customerIdentifier = new CustomerIdentifier(customer.uid);
  const email = new Email(customer.email);
  const personName = PersonName.of(customer.firstName, customer.lastName);
  const phoneNumber = (customer.phoneNumber && new PhoneNumber(customer.phoneNumber)) || null;
  const address = (customer.address && NominalAddressMapper.fromObject(customer.address)) || null;
  return new Customer(
    customerIdentifier,
    new Date(RequiredAttributes.requireNonNull(customer.createDate)),
    new Date(RequiredAttributes.requireNonNull(customer.updateDate)),
    email,
    personName,
    phoneNumber,
    address,
  );
};

const fromObject = (customer: any): Customer => {
  try {
    return mapCustomer(customer);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping Customer response.`, stack);
  }
};

const mapCreateRequest = (request: CustomerCreateArgs): BCustomerCreateRequest => {
  const { firstName, lastName } = request.personName;
  const phoneNumber = (request.phoneNumber && request.phoneNumber.value) || null;
  const address = (request.address && NominalAddressMapper.toApiRequest(request.address)) || null;

  return {
    merchantUid: request.merchantIdentifier.value,
    email: request.email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber,
    address,
  };
};

const toApiCreateRequest = (request: CustomerCreateArgs): BCustomerCreateRequest => {
  try {
    return mapCreateRequest(request);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping CustomerCreateArgs.`, stack);
  }
};

const CustomerMapper = {
  fromObject,

  toApiCreateRequest,
};

export default CustomerMapper;
