import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomContentPage } from './custom-content.page';

describe('CustomContentPage', () => {
  let component: CustomContentPage;
  let fixture: ComponentFixture<CustomContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
