import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
  {
    path: 'table',
    component: UserTableComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
