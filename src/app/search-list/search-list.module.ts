import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabellaComponent } from './tabella/tabella.component';

@NgModule({
  declarations: [FormComponent, TabellaComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [FormComponent, TabellaComponent],
})
export class SearchListModule {}
