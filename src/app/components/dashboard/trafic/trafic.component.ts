import { Component, input } from '@angular/core';
import { TraficService } from '../../../services/trafic.service';

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.css'
})
export class TraficComponent {
  constructor(public traficService: TraficService) {}
  

}
