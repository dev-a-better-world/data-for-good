import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';

import "@vonage/vwc-list";
import "@vonage/vwc-side-drawer";
import "@vonage/vwc-text";
import "@vonage/vwc-icon";
import '@vonage/vwc-list/vwc-list-item';
import "@vonage/vwc-data-grid"
import "@vonage/vwc-data-grid/vwc-data-grid-column"
import { AppRoutingModule } from './app-routing.module';
import { GraphComponent } from './components/graph/graph.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import '@vonage/vwc-button';
import '@vonage/vwc-card';
import { OverviewGraphComponent } from './components/overview-graph/overview-graph.component';
import { PieComponent } from './components/charts/pie/pie.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, OverviewComponent, PieComponent, UserTableComponent, OverviewGraphComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgxChartsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const PieElement = createCustomElement(PieComponent, {injector: injector});
    window.customElements.define('chart-element', PieElement);
  }
}
