import { Component } from '@angular/core';
import { Publication } from './interfaces/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      title: 'Intimate partner violence (IPV) with miscarriages, stillbirths and abortions: Identifying vulnerable households for women in Bangladesh',
      authors: ['Awan Aflaz', 'Raaj Kishore Biswas', 'Raisa Shamma', 'Nurjahan Ananna'],
      descriptions: ['Intimate partner violence (IPV) is a social problem in Bangladesh with adverse effects on maternal healthcare. This study analyzed the sociodemographic factors responsible for intimate partner violence and its overall association with reproductive healthcare–specifically miscarriages, stillbirths and induced abortions (MSA)–using Bangladesh Demographic Health Survey 2007, which contains the latest available intimate partner violence data till date, with the hypothesis that intimate partner violence is associated with miscarriages, stillbirths and induced abortions.',
                      'The generalized linear regression model was fitted to 3,920 women adjusting survey weights and cluster/strata variations.',
                      'The study concluded that 1 out of every 4 women who reported experiencing intimate partner violence also reported having one or more of miscarriages, stillbirths and induced abortions.',
                      'The results revealed that intimate partner violence and miscarriages, stillbirths and induced abortions were significantly associated with the age of the women, residence, age of the women at their first birth, sex of household head and the household’s financial condition.'
                  ],
      publishDate: 'July 28, 2020',
      link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0236670',
      image: 'assets/images/ipv.png',
    }
  ]
}
