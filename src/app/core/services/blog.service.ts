import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  getData() {
    return [
      {
        date: 'DECEMBER 20, 2025',
        title: 'Christmas in London: Where to Stay and What to See',
        description:
          'Plan your festive getaway with DND — from Christmas markets to cosy winter apartments, experience the magic of London like a local.',
        imageUrl: null,
        alt: null,
        onlyImage: false,
      },
      {
        date: 'FEBRUARY 14, 2026',
        title: 'Romantic London Stays for Valentine’s Day',
        description:
          'Surprise your special someone with a memorable escape — elegant serviced apartments, city lights, and a touch of DND comfort.',
        imageUrl: null,
        alt: null,
        onlyImage: false,
      },
      {
        date: 'APRIL 05, 2026',
        title: 'Spring Breaks You’ll Love',
        description:
          'Blooming parks, gentle sunshine, and stylish stays. Discover the perfect serviced homes for a refreshing spring escape.',
        imageUrl: null,
        alt: null,
        onlyImage: false,
      },
      {
        date: '',
        title: '',
        description: '',
        imageUrl: 'assets/img/image-blog.webp',
        alt: 'image blog',
        onlyImage: true,
      },
      {
        date: 'JULY 10, 2026',
        title: 'Summer in the City: Where to Stay and Relax',
        description:
          'Make the most of your summer with DND’s top locations — close to landmarks, restaurants, and the best of London life.',
        imageUrl: null,
        alt: null,
        onlyImage: false,
      },
    ];
  }

  getDataPromise() {
    return Promise.resolve(this.getData());
  }
}
