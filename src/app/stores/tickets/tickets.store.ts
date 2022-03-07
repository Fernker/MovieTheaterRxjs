import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ISeat {
  seatNum: number;
  row: number;
}

export interface TicketsState {
  selectedSeats: ISeat[];
  reservedSeats: ISeat[];
  timer: string; //seconds
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tickets' })
export class TicketsStore extends Store<TicketsState> {
  constructor() {
    super({ selectedSeats: [], reservedSeats: [], timer: '-' });
  }
}
