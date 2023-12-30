import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IntlTelInputNgModule } from 'intl-tel-input-ng';

@NgModule({
  imports: [CommonModule, BrowserModule, IntlTelInputNgModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
