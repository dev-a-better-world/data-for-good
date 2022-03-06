import {Component, Input, OnInit} from '@angular/core';

export interface OverviewData {
  type: string;
  data: any[] | string;
}

@Component({
  selector: 'dfg-overview',
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
