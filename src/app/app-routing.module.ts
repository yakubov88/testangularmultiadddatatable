import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent

  },

  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'table',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
