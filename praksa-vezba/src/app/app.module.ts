import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab1Component } from './component/tab1/tab1.component';
import { Tab2Component } from './component/tab2/tab2.component';

@NgModule({
  declarations: [AppComponent, Tab1Component, Tab2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
