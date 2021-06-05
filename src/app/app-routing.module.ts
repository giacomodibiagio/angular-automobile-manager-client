import { AutomobileEditComponent } from './automobile/automobile-edit/automobile-edit.component';
import { AutomobileDeleteComponent } from './automobile/automobile-delete/automobile-delete.component';
import { AutomobileSearchComponent } from './automobile/automobile-search/automobile-search.component';
import { AutomobileDetailComponent } from './automobile/automobile-detail/automobile-detail.component';
import { AutomobileCreateComponent } from './automobile/automobile-create/automobile-create.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'automobile/search', component: AutomobileSearchComponent},
  { path: 'automobile/create', component: AutomobileCreateComponent},
  { path: 'automobile/:id', component: AutomobileDetailComponent},
  { path: 'automobile/edit/:id', component: AutomobileEditComponent},
  { path: 'automobile/delete/:id', component: AutomobileDeleteComponent},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
