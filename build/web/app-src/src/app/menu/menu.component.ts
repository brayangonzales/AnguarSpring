import { Component } from '@angular/core';
import { MenuService } from './service/menu.service';
import { Menu } from './interface/menu';

@Component({
  selector: "menu-app",
  templateUrl: "./menu.component.html"
})

export class MenuComponent{
  listaDato : Menu[];
  constructor(private servicioMenu:MenuService){
    servicioMenu.getMenuData().subscribe(items => {
       this.listaDato =items;
    });
  }
}
