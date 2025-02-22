import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]', // use attribute selector for custom element
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
}
