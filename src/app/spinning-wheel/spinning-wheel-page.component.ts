import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";


@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel-page.component.html',
  styleUrls: ['./spinning-wheel-page.component.scss'],
})
export class SpinningWheelPage implements OnInit {


  private platform: Platform;

  message: string = '';
  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {

  }

  spinWheel() {
    this.resetMsg();
    let container = document.querySelector('.container') as HTMLElement;
    let number = (Math.random() * 10000);

    //let number = 31;
    console.log(number + 'nu');
    container.style.transform = 'rotate(' + number + 'deg)';
    //number += Math.ceil(Math.random() * 10000);
    let wheelAngle = number % 360;
    console.log(wheelAngle + 'cut');

    setTimeout(() => {

      let selectedOption;
      if (wheelAngle < 30) {
        selectedOption = 'Read';
      } else if (wheelAngle <= 60) {
        selectedOption = '12';
      } else if (wheelAngle <= 90) {
        selectedOption = 'Museum';
      } else if (wheelAngle <= 120) {
        selectedOption = 'Boardgames';
      } else if (wheelAngle <= 149) {
        selectedOption = 'Shopping';
      } else if (wheelAngle <= 179) {
        selectedOption = 'Ice Cream';
      } else if (wheelAngle <= 208) {
        selectedOption = 'Cooking';
      } else if (wheelAngle <= 238) {
        selectedOption = 'Restaurant';
      } else if (wheelAngle <= 268) {
        selectedOption = 'Bar';
      } else if (wheelAngle <= 298) {
        selectedOption = 'Movies';
      } else if (wheelAngle <= 328) {
        selectedOption = 'Swimming';
      } else if (wheelAngle <= 359){
        selectedOption = 'Walk';
      }


      this.message = 'The wheel landed on '+ selectedOption;
    }, 2000); //  timeout per wheel rotation duration
  }


  resetMsg() {
    this.message = '';
  }
}
