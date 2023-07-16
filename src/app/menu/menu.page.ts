import { Component, OnInit } from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {
  }

}
