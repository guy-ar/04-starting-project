import { Component, Host, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // insure that current style will become global
  host: {
    class: 'control',
    '(click)': 'onClick()' // part of the 2nd way for listen to host events - in this case click that will trigger the onClick method
  }
})
export class ControlComponent {
  // alternaltive for setting host uinsg code with @HostBinding devorator - but this is the old way
  // @HostBinding('class') className = 'control' // insure that current style will become global with setting clsss= control on the host element
  label = input.required<string>()
  // we have also option to listen to host events using @HostListener or via adding properties to the host
  // @HostListener('click') onClick() {
  //   console.log('click')
  // }

  // 2nd way to use host attributes it so have the onclick method and use the event click atribute to connect tothe function
  onClick() {
    console.log('click')
  }

}
