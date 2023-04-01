import { Component, Input } from '@angular/core';
import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() address: Address = {
    type: '',
    icon: '',
    link: ''
  }
}
