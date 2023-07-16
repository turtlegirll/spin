import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinWheelPage } from './spin-wheel.page';
import { async } from 'rxjs';
import {HomePage} from "../home/home.page";
import {IonicModule} from "@ionic/angular";

describe('SpinWheelPage', () => {
  let component: SpinWheelPage;
  let fixture: ComponentFixture<SpinWheelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinWheelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
