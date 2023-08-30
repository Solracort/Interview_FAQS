import { Component } from '@angular/core';

interface MenuItem {
  route: string;
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
    },
    {
      route: '/css',
    },
    {
      route: '/soft-skills',
    },
    {
      route: '/javascript',
    },
    {
      route: '/angular',
    },
  ];
}
