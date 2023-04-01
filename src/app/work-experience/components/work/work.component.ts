import { Component, Input } from '@angular/core';
import { Work } from '../../interfaces/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
 @Input() work: Work = {
  title: '',
  description: '',
  organization: '',
  year: '',
  logo: ''
 };
}
