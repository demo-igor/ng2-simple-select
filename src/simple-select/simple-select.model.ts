/**
 * Created by igordemo on 11/9/17.
 */


export interface SimpleSelectOption {
  name: string;
  value: string | number;
}

export interface SimpleSelectTexts {
  defaultOption: string;
}

export interface SimpleSelectSettings {
  isMultiple: boolean;
  showDefaultOption: boolean;
  defaultOptionValue: number | string;
}
