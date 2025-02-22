import { Component, Host, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // insure that current style will become global
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>()

}
