import { Component } from '@angular/core';
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
  onSubmit(titleValue: string, requestValue: string, form: HTMLFormElement) {
    console.log(titleValue)
    console.log(requestValue)
    form.reset()
  }

}
