import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  @Input() text: any;

  constructor() { }

  ngOnInit(): void {
  }

}
