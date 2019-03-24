import { Component } from '@angular/core';

@Component({
  selector: "menu-app",
  templateUrl: "./menu.component.html"
})

export class MenuComponent{
  menu: any =[
    {descripcion:"Ventas",icono: "shopping_cart"}

  ]

}
