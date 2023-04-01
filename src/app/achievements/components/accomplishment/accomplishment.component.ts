import { Component, Input } from '@angular/core';
import { Accomplishment } from '../../interfaces/accomplishment';

@Component({
  selector: 'app-accomplishment',
  templateUrl: './accomplishment.component.html',
  styleUrls: ['./accomplishment.component.scss']
})
export class AccomplishmentComponent {
  @Input() accomplishment: Accomplishment = {
    image: '',
    description: '',
   };
}
