import { Component } from '@angular/core';
import { Work } from './interfaces/work';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  works: Work[] = [
    {
      title: 'Research Analyst',
      organization: 'International Food Policy Research Institute (IFPRI)',
      description: 'Working closely with various organizations regarding food policy',
      year: 'Sep 2022 - Present',
      logo: 'assets/images/ifpri.jpeg'
    },
    {
      title: 'Research Assistant',
      organization: 'North South University',
      description: 'I was a part time research assistant',
      year: 'Dec 2021 - Jul 2022',
      logo: 'assets/images/nsu.png'
    },
    {
      title: 'Quality Control Associate',
      organization: '10 Minute School',
      description: 'Ensuring the quality of the contents made by 10 Minute School',
      year: 'Nov 2016 - May 2022',
      logo: 'assets/images/10_Minute_school.jpg'
    }
  ]
}
