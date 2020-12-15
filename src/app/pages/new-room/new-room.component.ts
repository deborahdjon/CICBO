import {Component, Input, OnInit} from '@angular/core';
import {Room, RoomService} from "../../../typescript-angular-client-generated";

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css']
})
export class NewRoomComponent implements OnInit {
  @Input() roomNumber: number;
  @Input() roomName: string;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }



  onSubmit(){
    const room:Room ={
      "number": this.roomNumber,
      "name": this.roomName
    }
    this.roomService.addRoom(room).subscribe(res =>{
      alert(res);
    });
  }
}
