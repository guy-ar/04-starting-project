import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../../model/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  delete = output<string>();
  detailsVisible = signal(false);

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible());
    // alternative option is to use update of signal
    this.detailsVisible.update(visible => !visible);
  }

  onDeleteTicket(ticketId: string) {
    this.delete.emit(ticketId);
  }

}
