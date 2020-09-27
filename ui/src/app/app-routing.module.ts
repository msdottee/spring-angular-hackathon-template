import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consulting', component: ConsultingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
