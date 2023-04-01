import { Component, Input } from '@angular/core';
import { Publication } from '../../interfaces/publication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {
  @Input() publication: Publication = {
    title: '',
    authors: [''],
    publishDate: '',
    descriptions: [''],
    link: '',
    image: '',
  }
}
