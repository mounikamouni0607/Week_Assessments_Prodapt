import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { OneHomeComponent } from './one-home/one-home.component';
import { OneHeaderComponent } from './one-header/one-header.component';
import { OneFooterComponent } from './one-footer/one-footer.component';
import { OneC1Component } from './one-c1/one-c1.component';
import { OneC2Component } from './one-c2/one-c2.component';
import { OneC3Component } from './one-c3/one-c3.component';
import { OneC4Component } from './one-c4/one-c4.component';
import { OneC5Component } from './one-c5/one-c5.component';
import { OneSiteLayoutComponent } from './one-site-layout/one-site-layout.component';
import { OnePageNotFoundComponent } from './one-page-not-found/one-page-not-found.component';

const routes: Routes = [
  {path:'',component:OneHomeComponent},
  {path:'one-home',component:OneHomeComponent},
  {path:'one-c1',component:OneC1Component},
  {path:'one-c2',component:OneC2Component},
  {path:'one-c3',component:OneC3Component},
  {path:'one-c4',component:OneC4Component},
  {path:'one-c5',component:OneC5Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
