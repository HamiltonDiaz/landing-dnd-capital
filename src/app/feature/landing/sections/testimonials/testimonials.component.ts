import { Component, OnInit } from '@angular/core';
import { ResponsiveCarrouselOptionsDto } from 'src/app/core/dto/resposive-carrousel-options.dto';
import { TestimonialsDto } from 'src/app/core/dto/testimonials.dto';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule,CardModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  testimonials: TestimonialsDto[] = [];

  responsiveOptions: ResponsiveCarrouselOptionsDto[] = [];

  constructor(private testimonialsService: TestimonialsService) {}
  ngOnInit(): void {
    this.testimonialsService.getDataPromise().then((items) => {
      this.testimonials = items;
    });
  }
}
