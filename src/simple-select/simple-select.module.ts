/**
 * Created by igordemo on 11/9/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleSelectComponent } from "./simple-select.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SimpleSelectComponent],
  declarations: [SimpleSelectComponent],
})
export class SimpleSelectModule { }
