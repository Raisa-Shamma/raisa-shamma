import { Component } from '@angular/core';
import { Address } from './interfaces/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  addresses: Address[] = [
    {
      type: 'email',
      icon: 'fas fa-envelope',
      link: 'raisashamma@gmail.com'
    },
    {
      type: 'phone',
      icon: 'fas fa-phone',
      link: '+8801824420282'
    },
    {
      type: 'linkedIn',
      icon: 'fab fa-linkedin',
      link: 'linkedin.com/in/raisa-shamma-94760a159'
    }
  ];
}
