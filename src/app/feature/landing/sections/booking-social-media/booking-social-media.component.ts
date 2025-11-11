import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { Ripple } from 'primeng/ripple';
import { environment } from 'src/enviroments/environment';

@Component({
  selector: 'app-booking-social-media',
  standalone: true,
  imports: [ImageModule, Ripple],
  templateUrl: './booking-social-media.component.html',
  styleUrl: './booking-social-media.component.scss',
})
export class BookingSocialMediaComponent {
  email: string = environment.contactEmail;
  airbnb: string = environment.social.airbnb;
  bookingcom: string = environment.social.bookingcom;
  tripadvisor: string = environment.social.tripadvisor;

  constructor(public router: Router) {}
}
