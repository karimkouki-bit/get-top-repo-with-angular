import { Component, OnInit } from '@angular/core';
import {RepoService} from '../../services/repo-service'


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
   repoList : any ;
  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.getRepoList();
  }
  getRepoList() {
    this.repoService.getRepositories().subscribe(response =>{
      console.log("repoList : " + JSON.stringify(response));
      this.repoList = response;
    })
  }

}
