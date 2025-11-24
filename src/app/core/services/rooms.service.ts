import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  getData() {
    return [
      {
        date: 'FEBRUARY 10 – 15, 2026',
        title: 'Romantic London Getaway',
        description:
          "Celebrate Valentine's week in one of our luxury city apartments. Enjoy elegant interiors, soft lighting, and a prime location for romantic walks.",
        imageUrl: 'assets/img/rooms/room-1.webp',
        alt: 'Image room 1',
        price: '£980',
      },
      {
        date: 'MARCH 8 – 11, 2026',
        title: 'Spring Stay in Canary Wharf',
        description:
          'Experience the charm of London’s modern skyline this spring. Perfect for short business trips or a stylish city break.',
        imageUrl: 'assets/img/rooms/room-2.webp',
        alt: 'Image room 2',
        price: '£1,300',
      },
      {
        date: 'MAY 8 – 11, 2026',
        title: 'City Escape – Central London',
        description:
          'Stay just steps away from London’s top attractions. Ideal for couples, professionals, and weekend explorers.',
        imageUrl: 'assets/img/rooms/room-3.webp',
        alt: 'Image room 3',
        price: '£1,200',
      },
      {
        date: 'JUNE 12 – 19, 2026',
        title: 'Summer by the Thames',
        description:
          'Relax in a bright, riverside apartment with modern amenities and peaceful views — perfect for your summer retreat.',
        imageUrl: 'assets/img/rooms/room-4.webp',
        alt: 'Image room 4',
        price: '£1,250',
      },
    ];
  }

  getDataPromise() {
    return Promise.resolve(this.getData());
  }
}
