import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServersComponent } from "./components/dashboard/servers/servers.component";
import { TraficComponent } from "./components/dashboard/trafic/trafic.component";
import { SupportComponent } from "./components/dashboard/support/support.component";
import { DashboardItemComponent } from "./components/dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServersComponent, TraficComponent, SupportComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  //currentStatus = 'online';
  currentStatus = 'offline';
}
