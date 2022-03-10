import { Component, OnInit } from '@angular/core';
import { TicketsManager } from '../../stores/tickets/tickets.manager';
import { TicketsQuery } from '../../stores/tickets/tickets.query';
@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss'],
})
export class TheaterComponent implements OnInit {
  constructor(
    private _ticketsQuery: TicketsQuery,
    private _ticketsManager: TicketsManager
  ) {}

  ngOnInit() {}

  selectSeat() {}

  clearSeats() {}

  reserveSeats() {}
}
