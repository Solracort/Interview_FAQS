import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  class: string;
  imageSrc: string;
  alt: string;
}
interface SoftSkills {
  route: string;
  imageSrc: string;
  alt: string;
}

@Component({
  selector: 'shared-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  public menuItem: MenuItem[] = [
    {
      route: '/html',
      class: 'bgHtml',
      imageSrc: '../../../assets/images/html.png',
      alt: 'logoHtml',
    },
    {
      route: '/css',
      class: 'bgCss',
      imageSrc: '../../../assets/images/css.png',
      alt: 'logoCss',
    },
    {
      route: '/javascript',
      class: 'bgJs',
      imageSrc: '../../../assets/images/javascript.png',
      alt: 'logoJs',
    },

    {
      route: '/angular',
      class: 'bgAngular',
      imageSrc: '../../../assets/images/angular.png',
      alt: 'logoAngular',
    },
  ];

  public softSkills: SoftSkills[] = [
    {
      route: '/soft-skills',
      imageSrc: '../../../assets/images/soft-skills.png',
      alt: 'logoSoftSkills',
    },
  ]
}
