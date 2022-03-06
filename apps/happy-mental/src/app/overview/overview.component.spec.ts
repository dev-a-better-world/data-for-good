import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from "@angular/core";

@Component({
  template: `<data-for-good-overview #child [overview-data]="overviewData">Hello</data-for-good-overview>`
})
class OverviewHolderComponent {
  @ViewChild('child') public overviewComponent: OverviewComponent | undefined;
  overviewData: number[] = [];
}
describe('OverviewComponent', () => {
  let component: OverviewHolderComponent;
  let fixture: ComponentFixture<OverviewHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewComponent, OverviewHolderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should receive overview data', async () => {
    const overviewData = [1,2,3]
    component.overviewData = overviewData;
    await fixture.detectChanges();
    await fixture.whenStable();
    expect(component.overviewComponent?.overviewData).toEqual(overviewData);
  });
});
