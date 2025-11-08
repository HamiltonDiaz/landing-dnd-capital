import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wine-glasses',
  standalone: true,
  imports: [],
  templateUrl: './wine-glasses.component.html',
  styleUrl: './wine-glasses.component.scss'
})
export class WineGlassesComponent {
  @Input() widthSize: string = '50px'
  @Input() heightSize : string = '50px'

}
