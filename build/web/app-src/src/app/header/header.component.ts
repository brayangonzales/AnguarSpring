import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector:  'header-app',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
    dev=environment.name;
}
