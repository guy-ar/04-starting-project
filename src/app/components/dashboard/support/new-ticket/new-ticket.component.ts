import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../../components/shared/button/button.component';
import { ControlComponent } from '../../../../components/shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
 // @ViewChild('form') form?: ElementRef<HTMLFormElement>
 private form = viewChild<ElementRef<HTMLFormElement>>('form')

 // possible to use viewChild.required - in this case the signal will always return a value like th following:
 //private form = viewChild.required<HTMLFormElement>('form')
  onSubmit(titleValue: string, requestValue: string) {
    console.log(titleValue)
    console.log(requestValue)
    this.form()?.nativeElement.reset() // form is wrapped as Element - si need to use nativeElement
  }
  

}
