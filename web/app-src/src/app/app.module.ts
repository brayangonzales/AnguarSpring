import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionComponent } from './seccion/seccion.component';
import { MenuSecondComponent } from './menu-second/menuSecond.component';
//libreries
import { HttpClientModule } from '@angular/common/http';
//services
import { MenuService } from './menu/service/menu.service';

@NgModule({
  declarations: [
    HeaderComponent,MenuComponent,SeccionComponent,MenuSecondComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [HeaderComponent,MenuComponent,SeccionComponent,MenuSecondComponent]
})
export class AppModule { }
