import { Component, Input } from '@angular/core';
import { Publication } from '../../interfaces/publication';

@Component({
  selector: 'app-publication-introduction',
  templateUrl: './publication-introduction.component.html',
  styleUrls: ['./publication-introduction.component.scss']
})
export class PublicationIntroductionComponent {
  @Input() title: string = '';
  @Input() authors: string[] = [''];
  @Input() link: string = '';
  @Input() publishDate: string = '';
}
