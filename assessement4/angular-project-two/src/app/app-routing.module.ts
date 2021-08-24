import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from './components/parent1/parent1.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';


const routes: Routes = [

  {path:'parent1',component:Parent1Component},
  {path:'child1',component:Child1Component},
  {path:'parent2',component:Parent2Component},
  {path:'child2',component:Child2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
