import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'n',
  },
  {
    path: 'n',
    component: NavigationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'd'
      },
      {
        path: 'd',
        component: DashboardComponent
      },
      {
        path: 't',
        component: TableComponent
      }
    ]
  },
  {
    path: 'a',
    component: AddressFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
