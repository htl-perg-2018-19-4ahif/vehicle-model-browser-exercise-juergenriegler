import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsComponent } from './models/models.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'models', component: ModelsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'models', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
