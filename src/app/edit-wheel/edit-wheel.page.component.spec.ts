import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditWheelPageComponent } from './edit-wheel.page.component';
import {async} from "rxjs";
import {HomePage} from "../home/home.page";
import {IonicModule} from "@ionic/angular";

describe('EditWheelPage', () => {
  let component: EditWheelPageComponent;
  let fixture: ComponentFixture<EditWheelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditWheelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
