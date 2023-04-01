import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Skill } from './interfaces/skill';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent{

  constructor() {
  }
  skills : Skill[] = [
    {
      name: 'RStudio',
      percentage: 90,
    },
    {
      name: 'Stata',
      percentage: 95,
    },
    {
      name: 'IBM SPSS Statistics',
      percentage: 85,
    },
    {
      name: 'LaTeX',
      percentage: 95,
    },
    {
      name: 'Microsoft Excel',
      percentage: 85,
    },
    {
      name: 'Writing',
      percentage: 97,
    },
    {
      name: 'Data Analysis',
      percentage: 87,
    },
    {
      name: 'Interpersonal Communication',
      percentage: 90,
    }
  ];
}
