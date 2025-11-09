import { Component } from '@angular/core';
import { ImageModule } from "primeng/image";
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-plannig',
  standalone: true,
  imports: [ImageModule,DividerModule],
  templateUrl: './plannig.component.html',
  styleUrl: './plannig.component.scss'
})
export class PlannigComponent {

}
