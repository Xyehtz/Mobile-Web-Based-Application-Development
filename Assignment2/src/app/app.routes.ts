import { Routes } from '@angular/router';
import {FormComponent} from './form/form.component';
import {ResultsComponent} from './results/results.component';

export const routes: Routes = [
  {path: 'tipCalculator', component: FormComponent},
  {path: '', redirectTo: 'tipCalculator', pathMatch: 'full'},
  {path: 'tipResults', component: ResultsComponent}
];
