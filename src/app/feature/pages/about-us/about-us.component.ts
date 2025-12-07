import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faUserTie, faShieldHalved, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveCarrouselOptionsDto } from 'src/app/core/dto/resposive-carrousel-options.dto';
import { TeamDto } from 'src/app/core/dto/team.dto';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { TestimonialsDto } from 'src/app/core/dto/testimonials.dto';

@Component({
  selector: 'app-about-us',
  imports: [FontAwesomeModule, ImageModule, DividerModule, CarouselModule, CardModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  iconTeam = faPeopleGroup;
  iconProfessional= faUserTie;
  iconTrusted = faShieldHalved;
  iconFair=faRankingStar;
  teams: TeamDto[] = [];
  testimonials: TestimonialsDto[] = [];
  
  responsiveOptions: ResponsiveCarrouselOptionsDto[] = [];
  responsiveOptionsTestimonials: ResponsiveCarrouselOptionsDto[] = [];

  constructor(private testimonialsService: TestimonialsService) {
    this.teams = [
      {
        name: 'Daniel Ruiz',
        position: 'Senior Accommodation Specialist',
        description: 'With over 5 years of experience, delivering exceptional service and ensuring every guest feels at home.',
        imageUrl: 'assets/img/team/daniel-ruiz.webp',
      },
    ];
  }
  ngOnInit(): void {

    this.testimonialsService.getDataPromise().then((items) => {
      this.testimonials = items;
    });

    this.responsiveOptionsTestimonials = [
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

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
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
