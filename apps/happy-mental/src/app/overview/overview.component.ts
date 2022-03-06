import {Component, Input, OnInit} from '@angular/core';
import '@vonage/vwc-card';

@Component({
  selector: 'data-for-good-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input('overview-data')
  overviewData: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
