import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { Ripple } from "primeng/ripple";

@Component({
  selector: 'app-booking-social-media',
  standalone: true,
  imports: [ImageModule, Ripple],
  templateUrl: './booking-social-media.component.html',
  styleUrl: './booking-social-media.component.scss'
})
export class BookingSocialMediaComponent {
  constructor(public router: Router) { }
}
