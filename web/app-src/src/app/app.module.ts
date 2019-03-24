import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionComponent } from './seccion/seccion.component';
import { MenuSecondComponent } from './menu-second/menuSecond.component';

@NgModule({
  declarations: [
    HeaderComponent,MenuComponent,SeccionComponent,MenuSecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,MenuComponent,SeccionComponent,MenuSecondComponent]
})
export class AppModule { }
