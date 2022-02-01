import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Component } from './component/tab3/tab3.component';
import { Tab4Component } from './component/tab4/tab4.component';


const routes: Routes = [
  { path: 'tab-3', component: Tab3Component },
  { path: 'tab-4', component: Tab4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
