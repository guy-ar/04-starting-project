import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>
  onSubmit(titleValue: string, requestValue: string) {
    console.log(titleValue)
    console.log(requestValue)
    if (this.form)
      this.form.nativeElement.reset() // form is wrapped as Element - si need to use nativeElement
  }
  

}
