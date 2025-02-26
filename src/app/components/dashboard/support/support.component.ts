import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket, TicketInput } from '../../../model/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: TicketInput) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,  
      request: ticketData.request,
      status: 'open'
    }
    this.tickets.push(newTicket);
  }
  onDeleteTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return {...ticket, status: 'closed'} //spread operator to create a new object and not mutate the original object. 
      }
      return ticket;
    });
  } 

}
