import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { DeveloperComponent } from './developer/developer.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    DeveloperComponent,
    RepoListComponent,
    DeveloperListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
