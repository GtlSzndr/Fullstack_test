import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './create-team/create-team.component';
import { F1ListComponent } from './f1-list/f1-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateTeamComponent } from './update-team/update-team.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "f1-list", component: F1ListComponent },
  { path: "create-team", component: CreateTeamComponent },
  { path: "update-team/:id", component: UpdateTeamComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
