import { Component, OnInit } from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-custom-content',
  templateUrl: './custom-content.page.html',
  styleUrls: ['./custom-content.page.scss'],
})
export class CustomContentPage implements OnInit {

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {
  }

}
