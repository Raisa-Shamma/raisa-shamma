import { Component } from '@angular/core';
import { Accomplishment } from './interfaces/accomplishment';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  record : Accomplishment[] = [
    {
      image: 'assets/images/scholarship_2.jpg',
      description: 'Prime Minister Scholarship'
    },
    {
      image: 'assets/images/gold_medalist.jpg',
      description: 'University of Dhaka Gold Medalist'
    }
  ]
}
