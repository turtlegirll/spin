import { Component, OnInit } from '@angular/core';
import {Platform} from "@ionic/angular";

interface Option {
  name: string;
  color: string;
}
@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel-page.component.html',
  styleUrls: ['./spinning-wheel-page.component.scss'],
})
export class SpinningWheelPage implements OnInit {

  isAnimating: boolean = false;

  options: Option[] = [
    { name: 'Option 1', color: '#fffb00' },
    { name: 'Option 2', color: '#ff4fa1' },
    { name: 'Option 3', color: '#ffaa00' },
    { name: 'Option 4', color: '#22ff00' },
    // Add more options as needed
    { name: 'Option 5', color: '#f111ff' },
    { name: 'Option 6', color: '#6e0033' },
    { name: 'Option 7', color: '#41ff50' },
    { name: 'Option 8', color: '#00a5ff' },
  ];
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  ngOnInit() {
  }


   rotateFunction(): void {
    const min: number = 1024;
    const max: number = 9999;
    const deg: number = Math.floor(Math.random() * (max - min)) + min;
    const boxElement: HTMLElement | null = document.getElementById('box');

    if (boxElement) {
      boxElement.style.transform = `rotate(${deg}deg)`;

      const mainBoxElement: HTMLElement | null = document.getElementById('mainbox');
      if (mainBoxElement) {
        mainBoxElement.classList.remove('animate');

        setTimeout(() => {
          mainBoxElement.classList.add('animate');
        }, 5000);
      }
    }
    this.isAnimating = false;
  }

  startAnimation(): void {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.rotateFunction();
    }
  }

}
