import NumberUtils from '../../../paramutils/numberUtils';

export class DecimalScalePrecision {

  private static DEFAULT_PRECISION = 12;

  value: number;


  constructor(value: number) {

    this.value = NumberUtils.requireNonNegative(value);
  
  }

  public static defaultScale(): DecimalScalePrecision {

    return new DecimalScalePrecision(DecimalScalePrecision.DEFAULT_PRECISION);

  }

}
