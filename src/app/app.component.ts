import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServersComponent } from "./components/dashbord/servers/servers.component";
import { TraficComponent } from "./components/dashbord/trafic/trafic.component";
import { SupportComponent } from "./components/dashbord/support/support.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServersComponent, TraficComponent, SupportComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  currentStatus = 'online';
}
