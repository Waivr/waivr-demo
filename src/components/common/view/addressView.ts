import { NominalAddress } from '../../../core/domain/common/address/nominalAddress';

export interface AddressView {
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    zipCode: string;

    fullAddress(): string;
}

const mapAddressView = (address: NominalAddress): AddressView => ({
    line1: address.line1.value,
    line2: address.line2?.value || null,
    city: address.city.value,
    state: address.state.value,
    country: address.country.value,
    zipCode: address.zipCode.value,
    fullAddress(): string {

        return `${this.line1} ${this.line2 || ''}${this.city} ${this.state} ${this.country} ${this.zipCode}`;
    
    }
});

export default mapAddressView;
