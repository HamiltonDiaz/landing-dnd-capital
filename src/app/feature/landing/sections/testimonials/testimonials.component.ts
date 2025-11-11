import { Component, OnInit } from '@angular/core';
import { ResponsiveCarrouselOptionsDto } from 'src/app/core/dto/resposive-carrousel-options.dto';
import { TestimonialsDto } from 'src/app/core/dto/testimonials.dto';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';




@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule,CardModule,DividerModule,ImageModule],
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
    
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
