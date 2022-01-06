import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { RepoListComponent } from './repo-list/repo-list.component';


const routes: Routes = [
  { path: 'repositories', component: RepoListComponent },
  { path: 'developers', component: DeveloperListComponent },
  { path: '', component: RepoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
