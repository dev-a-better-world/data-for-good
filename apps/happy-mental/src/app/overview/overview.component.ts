import {Component, Input, OnInit} from '@angular/core';

export interface OverviewData {
  type: string;
  data: any[] | string;
}

@Component({
  selector: 'data-for-good-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input('overview-data')
  overviewData: OverviewData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
