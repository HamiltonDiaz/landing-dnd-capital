import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { LocationDto } from 'src/app/core/dto/location.dto';
import { LocaltionService } from 'src/app/core/services/location.service';
import { ResponsiveCarrouselOptionsDto } from 'src/app/core/dto/resposive-carrousel-options.dto';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ButtonModule, CarouselModule, CardModule, DividerModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  providers: [LocaltionService],
})
export class LocationComponent implements OnInit {
  products: LocationDto[] = [];

  responsiveOptions: ResponsiveCarrouselOptionsDto[] = [];

  constructor(
    public router: Router,
    private locationService: LocaltionService
  ) { }
  ngOnInit(): void {
    this.locationService.getCards().then((products) => {
      this.products = products;
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

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
