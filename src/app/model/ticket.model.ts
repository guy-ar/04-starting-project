export interface Ticket {
    id: string;
    title: string;
    requst: string;
    status: 'open' | 'closed';
}
export interface TicketInput {
    title: string;
    request: string;
}