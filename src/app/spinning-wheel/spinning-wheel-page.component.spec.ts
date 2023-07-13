import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinningWheelPage } from './spinning-wheel-page.component';

describe('CustomContentPage', () => {
  let component: SpinningWheelPage;
  let fixture: ComponentFixture<SpinningWheelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpinningWheelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
