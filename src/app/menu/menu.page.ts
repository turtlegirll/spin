import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private platform: Platform;

  pages = [
    {
      title: ' Spin Activity Wheel',
      url: '/menu/spin-wheel'
    },
    {
      title: ' Edit Activity Wheel',
      url: '/menu/edit-wheel'
    }
  ]

  selectedPath = '';

  constructor(platform: Platform, private router: Router) {
    this.platform = platform;
    this.router.events.subscribe((event: any) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
  }

}
