import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  currentStatus: 'online' | 'offline' | 'unknown'= 'online';
  
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const interval = setInterval(() => {
      const random = Math.random(); 
      if (random > 0.7) {
        this.currentStatus = 'unknown';
      } else if (random < 0.3) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'online';
      } 
    }, 5000)
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

}
