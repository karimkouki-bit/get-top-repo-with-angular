import { Component, Input, OnInit } from '@angular/core';
import {Repository} from '../../model/repository.model';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() repoItem : Repository | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
