import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de-DE');
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { CovidComponent } from './covid/covid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap() {};

  constructor(injector: Injector) {
    const covidComponent = createCustomElement(CovidComponent, {injector});
    customElements.define('app-covid', covidComponent);
  }
}
