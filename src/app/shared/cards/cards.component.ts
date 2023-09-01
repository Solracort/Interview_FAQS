import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  class: string;
  imgClass: string;
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
      imgClass: "imgHtml",
      imageSrc: '../../../assets/images/html.png',
      alt: 'logoHtml',
    },
    {
      route: '/css',
      class: 'bgCss',
      imgClass: "imgCss",
      imageSrc: '../../../assets/images/css.png',
      alt: 'logoCss',
    },
    {
      route: '/javascript',
      class: 'bgJs',
      imgClass: "imgJs",
      imageSrc: '../../../assets/images/javascript.png',
      alt: 'logoJs',
    },

    {
      route: '/angular',
      class: 'bgAngular',
      imgClass: "imgAngular",
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
