import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab3Component } from './component/tab3/tab3.component';
import { Tab4Component } from './component/tab4/tab4.component';


@NgModule({
  declarations: [AppComponent, Tab3Component, Tab4Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
