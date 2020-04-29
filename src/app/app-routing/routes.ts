import { Routes } from '@angular/router';

import { AdditionComponent } from '../addition/addition.component';
import { SubtractionComponent } from '../subtraction/subtraction.component';
import { MultiplicationComponent } from '../multiplication/multiplication.component';
import { DivisionComponent } from '../division/division.component';
import { RandomOperationComponent } from '../random-operation/random-operation.component';
import { DashboardComponent } from '../dashboard/dashboard.component'

export const allroutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addition', component: AdditionComponent },
    { path: 'subtraction', component: SubtractionComponent },
    { path: 'multiplication', component: MultiplicationComponent },
    { path: 'division', component: DivisionComponent},
    { path: 'randomoperation', component: RandomOperationComponent}
  ];
  