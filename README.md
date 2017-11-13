# AngularX Simple Select

Works with Angular Final and AOT compilation

Just a `<select>` tag to work with Reactive Forms or NgModel in AngularX

## Quick start options

* Clone the repo: `git clone https://github.com/demo-igor/ng2-simple-select.git`.
* Install with [npm](https://www.npmjs.com): `npm install ng2-simple-select --save`.

## Usage

Import `SimpleSelectComponent` into your @NgModule.

```js
import { SimpleSelectModule } from 'ng2-simple-select';


@NgModule({
  // ...
  imports: [
    SimpleSelectModule,
  ]
  // ...
})
```

Define options in your consuming component:

```js
import { SimpleSelectOption } from 'ng2-simple-select';


export class MyClass implements OnInit {
  optionsModel: number[];
  myOptions: SimpleSelectOption[];

  ngOnInit() {
    this.myOptions = [
      { name: 'Bananas', value: 1 },
      { name: 'Apples', value: 2 },
      { name: 'Tomatoes', value: 3 }
    ];
  }
  onChange() {
    console.log(this.optionsModel);
  }
}
```

In your template, use the component directive:

```html
<simple-select
  [options]="myOptions"
  [(ngModel)]="optionsModel"
  (ngModelChange)="onChange($event)"
  >
</simple-select>
```
## Customize

### Settings
| Setting Item          | Description                                | Default Value     |
| --------------------- | ------------------------------------------ | ----------------  |
| isMultiple            | The multiple `<select>` attribute          | false             |
| showDefaultOption     | The first empty option displaying          | true              |
| defaultOptionValue    | The first empty option value               | ''                |

### Texts
| Text Item             | Description                                | Default Value     |
| --------------------- | ------------------------------------------ | ----------------  |
| defaultOption         | The text for the first empty option        | 'Select'          |

Import any of the `SimpleSelectSettings`, `SimpleSelectTexts` interfaces to enable/override settings or texts:
```js

// Default selection
optionsModel: number[] = [1, 2];

// Settings configuration
mySettings: SimpleSelectSettings = {
  isMultiple: true,
  showDefaultOption: false,
  defaultOptionValue: ''
};

// Text configuration
myTexts: SimpleSelectTexts = {
  defaultOption: 'Select some item'
};

// Options
myOptions: SimpleSelectOption[] = [
  { name: 'Bananas', value: 1 },
  { name: 'Apples', value: 2 },
  { name: 'Tomatoes', value: 3 }
];
```

```html
<simple-select
  [options]="myOptions"
  [texts]="myTexts"
  [settings]="mySettings"
  [(ngModel)]="optionsModel"
  >
</simple-select>
```

## Other examples

### Use model driven forms with ReactiveFormsModule:

```js
import { SimpleSelectOption } from 'ng2-simple-select';


export class MyClass implements OnInit {
  model: number[];
  myOptions: SimpleSelectOption[] = [
    { name: 'Bananas', value: 1 },
    { name: 'Apples', value: 2 },
    { name: 'Tomatoes', value: 3 }
  ];

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      optionsModel: [1, 2], // Default model
    });

    this.myForm.controls['optionsModel'].valueChanges
      .subscribe((selectedOptions: any) => {
        // changes
      });
  }
}
```

```html
<form [formGroup]="myForm">
  <simple-select
    [options]="myOptions"
    formControlName="optionsModel"
  >
  </simple-select>
</form>
```

## License

[MIT]
