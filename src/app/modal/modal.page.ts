import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  optionName!: string;
  optionIndex!: number;
  optionColor: any;

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
    this.modalCtrl.dismiss(this.optionName);
  }

  ngOnInit(): void {
    console.log('inmodal');
  }

  rename() {
    // Pass the modified option name and index back to the parent component
    this.modalCtrl.dismiss({
      optionIndex: this.optionIndex,
      optionName: this.optionName
    });
  }


}
