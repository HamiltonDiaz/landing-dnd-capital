import { Component } from '@angular/core';
import { IndexComponent } from './sections/index/index.component';
import { AboutUsComponent } from "./sections/about-us/about-us.component";
import { LocationComponent } from "./sections/location/location.component";
import { BookingSocialMediaComponent } from "./sections/booking-social-media/booking-social-media.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { PlannigComponent } from "./sections/plannig/plannig.component";
import { TestimonialsComponent } from "./sections/testimonials/testimonials.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [IndexComponent, AboutUsComponent, LocationComponent, BookingSocialMediaComponent, ExperienceComponent, PlannigComponent, TestimonialsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
