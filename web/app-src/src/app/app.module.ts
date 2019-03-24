import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [
    HeaderComponent,MenuComponent,SeccionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,MenuComponent,SeccionComponent]
})
export class AppModule { }
