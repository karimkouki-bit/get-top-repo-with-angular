import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../services/developer-service'

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  devList : any ;
  constructor(private developerService : DeveloperService) { }

  ngOnInit(): void {
    this.getDeveloperList();
  }

  getDeveloperList() {
    this.developerService.getDevelopers().subscribe(response =>{
      console.log("developerList : " + JSON.stringify(response))
      this.devList = response;
    })
  }

}
