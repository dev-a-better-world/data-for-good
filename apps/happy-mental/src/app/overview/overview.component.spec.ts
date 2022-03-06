import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import {Component} from "@angular/core";

let overviewInstance, componentData;

@Component({
  template: `<data-for-good-overview [overview-data]="overviewData">Hello</data-for-good-overview>`
})
class DialogContentComponent {
  overviewData = [];
}
describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should receive overview data', () => {
    expect(component).toBeTruthy();
  });
});
