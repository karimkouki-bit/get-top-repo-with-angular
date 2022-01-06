import { Injectable } from "@angular/core";
import {Api} from "./api";



@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private api : Api){}

  getRepositories(){
    return this.api.get("repositories.json");
  }

}
