import { Injectable } from '@angular/core';

@Injectable()
export class LocaltionService {
  getCardsData() {
    return [
      {
        title: 'At any Time',
        subtitle: 'Incredible comfort',
        detail:
          'Breathe in the spring air of the most romantic city in the world!',
        imageUrl: 'assets/img/cards-home/img-1.png',
        isFinal: false,
      },
      {
        title: 'Are you ready to Start',
        subtitle: 'Ready for Studies',
        detail:
          'Relax on the white sandy beaches of one of the most mysterious islands in Greece.',
        imageUrl: 'assets/img/cards-home/img-2.png',
        isFinal: false,
      },
      {
        title: 'Went you want',
        subtitle: 'Each member of your family',
        detail:
          'Fly in a hot air balloon over the cave cities of Cappadocia and go on excursions.',
        imageUrl: 'assets/img/cards-home/img-3.png',
        isFinal: false,
      },
      {
        title: '',
        subtitle: '',
        detail: '',
        imageUrl: '',
        isFinal: true,
      },
    ];
  }

  getCards() {
    return Promise.resolve(this.getCardsData());
  }
}
