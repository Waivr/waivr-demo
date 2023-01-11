import DecimalUtils from './decimalUtils';
import { DecimalScalePrecision } from '../domain/common/numbers/decimalScalePrecision';
import { DecimalRoundingMode } from '../domain/common/numbers/decimalRoundingMode';

describe('DecimalUtils', () => {

  it('round_whenNumberWithLongerPrecisionThanRequired_andRoundingUpApplied_thenRoundToPrecision', async () => {

    const scalePrecision = DecimalScalePrecision.defaultScale();
    const roundingMode = DecimalRoundingMode.defaultRoundingMode();
    const rounded = DecimalUtils.round(1.999999999999999, scalePrecision, roundingMode);
    expect(rounded).toEqual(2);

  });

  it('round_whenNumberWithLongerPrecisionThanRequired_andNoRoundingApplied_thenRoundToPrecision', async () => {

    const scalePrecision = DecimalScalePrecision.defaultScale();
    const roundingMode = DecimalRoundingMode.defaultRoundingMode();
    const rounded = DecimalUtils.round(4.533423131231213, scalePrecision, roundingMode);
    expect(rounded).toEqual(4.533423131231);

  });

  it('round_whenNumberWithLongerPrecisionThanRequired_andPrecisionNotDefault_andNoRoundingApplied_thenRoundToPrecision', async () => {

    const scalePrecision = new DecimalScalePrecision(8);
    const roundingMode = DecimalRoundingMode.defaultRoundingMode();
    const rounded = DecimalUtils.round(4.533423131231213, scalePrecision, roundingMode);
    expect(rounded).toEqual(4.53342313);

  });

});
