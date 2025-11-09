import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  getData() {
    return [
      {
        title:'6-days with DND',
        imageUrl: 'assets/img/testimonials/img-1.webp',
        alt: 'Image testimonial 1',
        name: 'Federico Stalone',
        shortDescription:
          'I am extremely impressed with the service provided by DND Capital. Everything was perfect, during our stay in London',
        longDescription: [
          'I am extremely impressed with the service provided by DND Capital. Everything was flawless — from booking our apartment to the final moments of our stay.',
          'We started our trip in London, and the property we stayed in was absolutely beautiful — modern, spotless, and perfectly located. The DND team made sure we had everything we needed, always friendly and ready to help.',
          'Our time in the city was unforgettable, and coming back each day to such a comfortable, stylish home made the experience even better.',
          'I’ll definitely choose DND again for my next stay — they truly make you feel at home.',
        ],
        date: 'AUGUST 14, 2025',
      },
      {
        title:'7-days on London',
        imageUrl: 'assets/img/testimonials/img-2.webp',
        alt: 'Image testimonial 2',
        name: 'Amanda Peterson',
        shortDescription:
          'Last week, we arrived back from a luxury private acomodation on London. Our adventure just exceeded all our expectations. The team was very helpful.',
           longDescription: [
            'Last week, we returned from our stay at one of DND’s luxury serviced apartments in London, and the experience exceeded all our expectations.',
            'The DND team was incredibly welcoming and attentive, making sure every detail was perfect from check-in to check-out.',
            'The apartment was spotless, beautifully designed, and in the perfect location to explore the city.',
            'We felt comfortable, safe, and truly at home throughout our stay.',
            'I’ll definitely choose DND again for our next visit — they did an amazing job!',
           
          ],
        date: 'JUNE 02, 2025',
      },
      {
        title:'7-days Romantic Stay',
        imageUrl: 'assets/img/testimonials/img-3.webp',
        alt: 'Image testimonial 3',
        name: 'James Brown',
        shortDescription:
          'I wanted to surprise my girlfriend with a romantic trip to Rome and Milan for her birthday. This travel agency did everything to the highest standard!',
          longDescription: [
             'I wanted to surprise my girlfriend with a romantic getaway to London for her birthday, and DND Capital made it absolutely unforgettable. From the very first message, their team handled everything with care and attention to detail.',
             'When we arrived, the apartment was beautifully prepared — soft lighting, fresh flowers, and a warm welcome note waiting for us. The staff had even arranged a small surprise to make the evening extra special.',
             'Every moment felt thoughtful and personal. We truly felt like we were living a scene from a romantic film. Thank you, DND, for making it such a perfect stay!',
          ],
        date: 'AUGUST 14, 2025',
      },
    ];
  }

  getDataPromise() {
    return Promise.resolve(this.getData());
  }
}
