import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.page.html',
  styleUrls: ['./spin-wheel.page.scss'],
})
export class SpinWheelPage implements OnInit {

  isSpinning = false;

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
    let number = Math.random() * 1000;

    container.style.transform = 'rotate(' + number + 'deg)';
    let wheelAngle = number % 360;

    setTimeout(() => {

      let selectedOption;
      if (wheelAngle < 32) {
        selectedOption = this.options[0];
      } else if (wheelAngle <= 63) {
        selectedOption = this.options[11];
      } else if (wheelAngle <= 93) {
        selectedOption = this.options[10];
      } else if (wheelAngle <= 122) {
        selectedOption = this.options[9];
      } else if (wheelAngle <= 150) {
        selectedOption = this.options[8];
      } else if (wheelAngle <= 177) {
        selectedOption = this.options[7];
      } else if (wheelAngle <= 205) {
        selectedOption = this.options[6];
      } else if (wheelAngle <= 234) {
        selectedOption = this.options[5];
      } else if (wheelAngle <= 264) {
        selectedOption = this.options[4];
      } else if (wheelAngle <= 296) {
        selectedOption = this.options[3];
      } else if (wheelAngle <= 328) {
        selectedOption = this.options[2];
      } else if (wheelAngle <= 359) {
        selectedOption = this.options[1];
      }


      this.message = '' + selectedOption;
      console.log(this.message);
    }, 2000); //  timeout per wheel rotation duration
  }


  /*  spinWheel() {
      this.resetMsg();
      let container = document.querySelector('.container') as HTMLElement;
      let number = Math.random() * 1000;
      let selectedOptions: string[] = [];

      console.log(number);
      container.style.transform = 'rotate(' + number + 'deg)';

      const angleRanges = [
        {startAngle: 0, endAngle: 32, optionIndex: 0, in: 0},
        {startAngle: 33, endAngle: 63, optionIndex: 11, in: 1},
        {startAngle: 64, endAngle: 93, optionIndex: 10, in: 2},
        {startAngle: 95, endAngle: 122, optionIndex: 9, in: 3},
        {startAngle: 123, endAngle: 150, optionIndex: 8, in: 4},
        {startAngle: 151, endAngle: 177, optionIndex: 7, in: 5},//here
        {startAngle: 178, endAngle: 205, optionIndex: 6, in: 6},
        {startAngle: 206, endAngle: 234, optionIndex: 5, in: 7},
        {startAngle: 235, endAngle: 264, optionIndex: 4, in: 8},
        {startAngle: 265, endAngle: 296, optionIndex: 3, in: 9},
        {startAngle: 297, endAngle: 328, optionIndex: 2, in: 10},
        {startAngle: 329, endAngle: 359, optionIndex: 1, in: 11},
      ];

      while (number >= 0) {
          console.warn(number + 'at first');
        if (number <= 360) {
          for (const range of angleRanges) {
            console.warn('in for number' + number);

            if (number >= range.startAngle && number <= range.endAngle) {
               console.warn('in special numbe' + number);

              for (let i = 0; i <= range.in; i++) {
                selectedOptions.push(this.options[angleRanges[i].optionIndex]);
                 console.log('Options: ' + this.options[angleRanges[i].optionIndex]);

              }
              break;
            }
          }
        } else {
           console.warn('in else');

          for (let i = 0; i < 12; i++) {
            selectedOptions.push(this.options[angleRanges[i].optionIndex]);
            console.log('More: ' + this.options[angleRanges[i].optionIndex]);
          }

        }
        number = number - 360;
          console.warn(number + 'at end');

      }



      let delay = 0;

      for (let i = 0; i < selectedOptions.length; i++) {
        setTimeout(() => {
          this.message = selectedOptions[i];
          // console.log(this.message);
        }, delay);

        delay += 2000 / selectedOptions.length; // Delay between consecutive messages
      }


    }
    */

  resetMsg() {
    this.message = '';
  }
}
