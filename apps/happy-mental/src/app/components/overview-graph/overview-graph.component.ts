import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'dfg-overview-graph',
  templateUrl: './overview-graph.component.html',
  styleUrls: ['./overview-graph.component.scss']
})
export class OverviewGraphComponent  {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartColors: any = [
    { 
      backgroundColor: ['#dcc1fc', '#871eff', '#440291']
    }
]

    public barChartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', stack: 'a' },
    ];



}
