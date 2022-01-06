import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/model/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  @Input() devItem : Developer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
