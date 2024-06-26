import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import {async} from "rxjs";
import {HomePage} from "../home/home.page";
import {IonicModule} from "@ionic/angular";

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
