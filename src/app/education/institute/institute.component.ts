import { Component, Input } from '@angular/core';
import { Study } from '../interfaces/study';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.scss']
})
export class InstituteComponent {
  @Input() study: Study = {
    institutionName: '',
    degreeName: '',
    year: '',
    logo: ''
   };
}
