import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Mobile: any;
  DialCode: any;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const inputElement = this.phoneInput.nativeElement;
    const iti = intlTelInput(inputElement, {
      initialCountry: 'in',
      preferredCountries: ['in', 'us', 'gb', 'ca'],
    });
    inputElement.addEventListener('input', () => {
      this.DialCode = iti.getSelectedCountryData().dialCode;
      const phoneNumber = iti.getNumber().replace('+' + this.DialCode, '');
      this.Mobile = phoneNumber.trim();
    });
  }
}
