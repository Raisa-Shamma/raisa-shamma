import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit, OnDestroy {
  @Input() skill: Skill = {
    name: '',
    percentage: 90,
  };
  
  @ViewChild('circleProgress', { static: true }) circleProgress!: ElementRef;
  
  observer!: IntersectionObserver;

  constructor() {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = this.circleProgress.nativeElement;
          progress.setAttribute('animation', 'true');
          progress.setAttribute('animationDuration', '1300');
          this.observer.unobserve(entry.target);
        }
      });
    });

    this.observer.observe(this.circleProgress.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
