import { AutomobileDetailComponent } from './automobile/automobile-detail/automobile-detail.component';
import { AutomobileCreateComponent } from './automobile/automobile-create/automobile-create.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'automobile/create', component: AutomobileCreateComponent},
  { path: 'automobile/:id', component: AutomobileDetailComponent},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
