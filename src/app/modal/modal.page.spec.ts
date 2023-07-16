import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPage } from './modal.page';
import {HomePage} from "../home/home.page";
import {IonicModule} from "@ionic/angular";

describe('ModalPage', () => {
  let component: ModalPage;
  let fixture: ComponentFixture<ModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
