import { Component, OnInit } from '@angular/core';
import {Room} from '../room.model';
import {RoomCategory} from '../room-category.model';
import {DataService} from '../../../data-services/data.service';
import {UiService} from '../../../data-services/ui.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  roomLists: Room[][] = [];
  roomCategories: RoomCategory[] = [];

  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.dataService.getRoomCategories();
    this.uiService.roomCategoriesSub.subscribe(categories => {
      this.roomCategories = categories;
    });

    this.dataService.getRoomLists();
    this.uiService.roomListsSub.subscribe(roomLists => {
      this.roomLists = roomLists;
    });
  }

}