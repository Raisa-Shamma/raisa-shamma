import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-description',
  templateUrl: './publication-description.component.html',
  styleUrls: ['./publication-description.component.scss']
})
export class PublicationDescriptionComponent {
  @Input() description: string = '';
}
