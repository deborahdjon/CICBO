import { Component, OnInit } from '@angular/core';
import { MenuButtonComponent} from "../menu-button/menu-button.component";
import { NavElementComponent} from "../nav-element/nav-element.component";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.less']
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
