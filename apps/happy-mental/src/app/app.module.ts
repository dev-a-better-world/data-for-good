import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import "@vonage/vwc-list";
import "@vonage/vwc-side-drawer";
import "@vonage/vwc-text";
import "@vonage/vwc-icon";
import '@vonage/vwc-list/vwc-list-item';
import "@vonage/vwc-data-grid"
import "@vonage/vwc-data-grid/vwc-data-grid-column"
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import '@vonage/vwc-button';
import '@vonage/vwc-card';
import { OverviewGraphComponent } from './components/overview-graph/overview-graph.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, OverviewComponent, GraphComponent, UserTableComponent, OverviewGraphComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgChartsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
