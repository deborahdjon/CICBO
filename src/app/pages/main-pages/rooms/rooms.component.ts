import {Component, Input, OnInit} from '@angular/core';
import {GuestwId, Room, RoomService} from "../../../../typescript-angular-client-generated";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {
  @Input() roomNumber: number;
  @Input() roomName: string;
  public rooms:Room[] = [];
  protected roomsMap:Map<number,Room> = new Map;
  protected selectedRooms:Map<number,boolean> = new Map;
  public allCheckBoxes = false;


  constructor(private roomService: RoomService) { }

  ngOnInit(): void {return}

  onSubmit(){
    const room:Room ={
      "number": this.roomNumber,
      "name": this.roomName
    }
    this.roomService.addRoom(room).subscribe(res =>{
      alert(res);
    });
  }

  public toggleSelecteRoom(roomNumber:number){
    this.selectedRooms.set(roomNumber , !this.selectedRooms.get(roomNumber));
  }

  public showAll():void{
    this.roomService.listRooms().subscribe(res => {
      this.rooms = res;
    });
  }

  delete():void{
    let count = 0;
    const toDelete:number[] = [];
    for (const [key, value] of this.selectedRooms){
      if(value){
        count++;
        toDelete.push(key);
      }
    }

    if (confirm(`Do you want to delete ${count} guests?`)) {
      toDelete.forEach(id =>{
        this.roomService.deleteRoom(id).subscribe(res =>{
          console.log(res);
        });
        this.showAll();
      })
    } else {
      alert("Guests are not removed.");
    }
  }



}
