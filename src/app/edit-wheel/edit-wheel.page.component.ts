import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MenuController, ModalController, NavController} from "@ionic/angular";
import {ModalPage} from "../modal/modal.page";

@Component({
  selector: 'app-edit-wheel',
  templateUrl: './edit-wheel.page.component.html',
  styleUrls: ['./edit-wheel.page.component.scss'],
})
export class EditWheelPageComponent implements OnInit {
  options: string[] = ['Read', 'Walk', 'Swimming', 'Movies', 'Bar', 'Restaurant', 'Cooking', 'Ice Cream', 'Shopping', 'Boardgames', 'Museum', 'City'];
  renamedOptions: string[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private modalCtrl: ModalController,
  ) {
  }


  async showModal(option: string, index: number) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        optionIndex: index,
        optionName: option
      }
    });
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.renameOption(data.data.optionIndex, data.data.optionName);

        const updatedOptionName = data.data.optionName;
        this.options[data.data.optionIndex] = updatedOptionName;
        // Optionally, you can update the renamedOptions array as well
        this.renamedOptions[data.data.optionIndex] = updatedOptionName;
      }
    });
    return await modal.present();
  }


  ngOnInit() {
    console.log('ngOnInit called in edit'); // Add this line
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
    }
  }

  renameOption(index: number, optionName: string) {
    console.log('in rename');
    // Update the option with the renamed value
    this.options[index] = optionName;
    localStorage.setItem('options', JSON.stringify(this.options));

    // Trigger change detection to update other components
    this.changeDetectorRef.detectChanges();
  }


}
