import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interface/menu';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  path:string;
  constructor(private menuService:HttpClient) {
   //  console.log("This connexion is able");
      this.path=environment.urlPath+environment.port;
      console.log(this.path);
  }
  getMenuData(){
    //https://jsonplaceholder.typicode.com/posts
    return this.menuService.get<Menu[]>("http://localhost:8080/menu/item/");
  }
}
