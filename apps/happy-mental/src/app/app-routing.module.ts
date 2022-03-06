import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './components/user-table/user-table.component';
import { OverviewComponent } from './overview/overview.component';
import {PieComponent} from "./components/charts/pie/pie.component";

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'pie',
    component: PieComponent,
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
