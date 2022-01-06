import { Injectable } from "@angular/core";
import {Api} from "./api";


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private api : Api){}

  getDevelopers(){
    return this.api.get("developers.json");
  }

}
