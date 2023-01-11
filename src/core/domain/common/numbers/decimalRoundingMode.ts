import RequiredAttributes from '../../../paramutils/requiredAttributes';

export enum RoundingMode {
  UP= 'UP',
  DOWN= 'DOWN',
  CEILING= 'CEILING',
  FLOOR= 'FLOOR',
  HALF_UP= 'HALF_UP',
  HALF_DOWN= 'HALF_DOWN',
  HALF_EVEN= 'HALF_EVEN',
}

export class DecimalRoundingMode {

  private static DEFAULT_PRECISION = 12;

  value: RoundingMode;


  constructor(value: RoundingMode) {

    this.value = RequiredAttributes.requireNonNull(value);
  
  }

  public static defaultRoundingMode(): DecimalRoundingMode {

    return new DecimalRoundingMode(RoundingMode.HALF_DOWN);

  }

}
