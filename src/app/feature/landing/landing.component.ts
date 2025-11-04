import { Component } from '@angular/core';
import { IndexComponent } from './sections/index/index.component';
import { AboutUsComponent } from "./sections/about-us/about-us.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [IndexComponent, AboutUsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
