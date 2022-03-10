import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ISeat {
  seatNum: number;
  row: number;
}

export type RowLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
export interface ITheater {
  rows: RowLetters[];
  seatsPerRow: number;
}

export interface TicketsState {
  selectedSeats: ISeat[];
  reservedSeats: ISeat[];
  timer: string; //seconds
  theater: ITheater;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tickets' })
export class TicketsStore extends Store<TicketsState> {
  constructor() {
    super({
      selectedSeats: [],
      reservedSeats: [],
      timer: '-',
      theater: {
        seatsPerRow: 11,
        rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      },
    });
  }
}
