import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './component/tab1/tab1.component';
import { Tab2Component } from './component/tab2/tab2.component';
import { Tab3Component } from './component/tab3/tab3.component';
import { Tab4Component } from './component/tab4/tab4.component';
import { Tab5Component } from './component/tab5/tab5.component';
import { Tab6Component } from './component/tab6/tab6.component';


const routes: Routes = [
  { path: 'tab1', component: Tab1Component},
  { path: 'tab2', component: Tab2Component},
  { path: 'tab-3', component: Tab3Component },
  { path: 'tab-4', component: Tab4Component },
  { path: 'tab-5', component: Tab5Component },
  { path: 'tab-6', component: Tab6Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
