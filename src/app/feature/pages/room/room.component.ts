import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { RoomDto } from 'src/app/core/dto/room.dto';
import { RoomsService } from 'src/app/core/services/rooms.service';

@Component({
  selector: 'app-room',
  imports: [DividerModule, FontAwesomeModule, CardModule],
  standalone: true,
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent implements OnInit {
  iconHotel = faHotel;
  roomsList: RoomDto[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getDataPromise().then((items) => {
      this.roomsList = items;
    });
  }
}
