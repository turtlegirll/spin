import { Component, OnInit } from '@angular/core';
import {Platform} from "@ionic/angular";


@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel-page.component.html',
  styleUrls: ['./spinning-wheel-page.component.scss'],
})
export class SpinningWheelPage implements OnInit {


  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {
    let container = document.querySelector('.container') as HTMLElement;
    let btn = document.getElementById('spin') as HTMLButtonElement;
    let number = Math.ceil(Math.random() * 10000);

    let flash = document.querySelector('.container div') as HTMLElement;

    btn.onclick = function () {
      container.style.transform = 'rotate(' + number + 'deg)';
      number += Math.ceil(Math.random() * 10000);
    };
  }

}
