import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from '../app/addition/addition.component';
import { SubtractionComponent } from '../app/subtraction/subtraction.component';
import { MultiplicationComponent } from '../app/multiplication/multiplication.component';
import { DivisionComponent } from '../app/division/division.component';
import { RandomOperationComponent } from '../app/random-operation/random-operation.component';

const routes: Routes = [
  { path: '', redirectTo: '/addition', pathMatch: 'full'},
  { path: 'addition', component: AdditionComponent },
  { path: 'subtraction', component: SubtractionComponent },
  { path: 'multiplication', component: MultiplicationComponent },
  { path: 'division', component: DivisionComponent},
  { path: 'randomoperation', component: RandomOperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
