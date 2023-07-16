import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.page.html',
  styleUrls: ['./spin-wheel.page.scss'],
})
export class SpinWheelPage implements OnInit {


  message: string = '';

  options: string[] = ['Read', 'Walk', 'Swimming', 'Movies', 'Bar', 'Restaurant', 'Cooking', 'Ice Cream', 'Shopping', 'Boardgames', 'Museum', 'City'];
  renamedOptions: string[] = [];

  constructor(private platform: Platform, private changeDetectorRef: ChangeDetectorRef) {
  }


  ngOnInit() {
    console.log('ngOnInit called in spn'); // Add this line
     this.loadOptions();
  }

  ionViewWillEnter() {
  this.loadOptions();
  }

  loadOptions() {
    const storedOptions = localStorage.getItem('options');
    if (storedOptions) {
      this.options = JSON.parse(storedOptions);
      this.renamedOptions = JSON.parse(storedOptions);
      this.changeDetectorRef.detectChanges(); // Trigger change detection
    }
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
        selectedOption = this.options[0];
      } else if (wheelAngle <= 60) {
        selectedOption = this.options[11];
      } else if (wheelAngle <= 90) {
        selectedOption = this.options[10];
      } else if (wheelAngle <= 120) {
        selectedOption = this.options[9];
      } else if (wheelAngle <= 149) {
        selectedOption = this.options[8];
      } else if (wheelAngle <= 179) {
        selectedOption = this.options[7];
      } else if (wheelAngle <= 208) {
        selectedOption = this.options[6];
      } else if (wheelAngle <= 238) {
        selectedOption = this.options[5];
      } else if (wheelAngle <= 268) {
        selectedOption = this.options[4];
      } else if (wheelAngle <= 298) {
        selectedOption = this.options[3];
      } else if (wheelAngle <= 328) {
        selectedOption = this.options[2];
      } else if (wheelAngle <= 359) {
        selectedOption = this.options[1];
      }


      this.message = 'The wheel landed on ' + selectedOption;
    }, 2000); //  timeout per wheel rotation duration
  }


  resetMsg() {
    this.message = '';
  }
}
