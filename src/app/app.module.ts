import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionByRegionComponent } from './components/position-by-region/position-by-region.component';
import { PositionByCurrencyComponent } from './components/position-by-currency/position-by-currency.component';
import { AssetsAndLiabilitiesComponent } from './components/assets-and-liabilities/assets-and-liabilities.component';
import { CrossCurrencySweepsComponent } from './components/cross-currency-sweeps/cross-currency-sweeps.component';
import { SweepsInGBPComponent } from './components/sweeps-in-gbp/sweeps-in-gbp.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SweepMonitorComponent } from './components/sweep-monitor/sweep-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionByRegionComponent,
    PositionByCurrencyComponent,
    AssetsAndLiabilitiesComponent,
    CrossCurrencySweepsComponent,
    SweepsInGBPComponent,
    NotificationsComponent,
    QuickLinksComponent,
    HeaderComponent,
    DashboardComponent,
    SweepMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
