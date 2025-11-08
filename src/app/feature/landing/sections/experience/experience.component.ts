import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { WineGlassesComponent } from "./resources/wine-glasses/wine-glasses.component";
import { DiplomaComponent } from "./resources/diploma/diploma.component";
import { DiamondComponent } from "./resources/diamond/diamond.component";


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CardModule, ImageModule, WineGlassesComponent, DiplomaComponent, DiamondComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
