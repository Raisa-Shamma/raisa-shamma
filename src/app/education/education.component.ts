import { Component } from '@angular/core';
import { Study } from './interfaces/study';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  studies: Study[] = [
    {
      institutionName: 'University of Dhaka',
      degreeName: 'Master of Science - MS, Applied Statistics',
      year: 'Dec 2021 - Dec 2022',
      logo: 'assets/images/DU-logo.jpg'
    },
    {
      institutionName: 'University of Dhaka',
      degreeName: 'Bachelor of Science - BS, Applied Statistics',
      year: 'Jan 2017 - Jan 2020',
      logo: 'assets/images/DU-logo.jpg'
    },
  ]
}
