/**
 * Created by igordemo on 11/9/17.
 */
import { Component, ViewEncapsulation, forwardRef, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SimpleSelectOption, SimpleSelectTexts, SimpleSelectSettings } from './simple-select.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const SIMPLE_SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleSelectComponent),
  multi: true
};

@Component({
  selector: 'simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [SIMPLE_SELECT_VALUE_ACCESSOR]
})
export class SimpleSelectComponent implements ControlValueAccessor, OnInit {
  @Input() options: Array<SimpleSelectOption>;
  @Input() texts: SimpleSelectTexts;
  @Input() settings: SimpleSelectSettings;

  private onTouchedCallback: Function = () => {};
  private onChangeCallback: Function = () => {};
  private defaultTexts: SimpleSelectTexts = {
    defaultOption: 'Select'
  };
  private defaultSettings: SimpleSelectSettings = {
    isMultiple: false,
    showDefaultOption: true,
    defaultOptionValue: ''
  };
  public disabled: boolean = false;
  public selected: any[] = [];

  constructor() {}

  ngOnInit() {
    this.texts = this.texts ? Object.assign(this.defaultTexts, this.texts) : this.defaultTexts;
    this.settings = this.settings ? Object.assign(this.defaultSettings, this.settings) : this.defaultSettings;
  }

  writeValue(value: any): void {
    this.selected = value !== undefined && value !== null
      ? Array.isArray(value) ? value : [value]
      : [];
  }

  onChange($event: any): void {
    if (this.settings.isMultiple) {
      const options = $event.target.options;
      const values: any[] = [];

      for(let i = 0; i < options.length; i++) {
        if(options[i].selected == true
          && (!this.settings.showDefaultOption || (this.settings.showDefaultOption && i != 0))) {
          values.push(options[i].value);
        }
      }

      this.onChangeCallback(values);
    } else {
      const value: any = $event.target.value;
      this.onChangeCallback(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
