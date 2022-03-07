import { Injectable } from '@angular/core';
import { arrayAdd } from '@datorama/akita';

import { ISeat, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsManager {
  constructor(private _store: TicketsStore) {}

  addSelectedSeat(seatInfo: ISeat) {}

  clearSelectedSeats() {}

  reserveSelectedSeats() {}

  startTimer() {}

  endTimer() {}
}
