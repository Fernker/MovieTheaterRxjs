import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TicketsState, TicketsStore } from './tickets.store';

@Injectable({ providedIn: 'root' })
export class TicketsQuery extends Query<TicketsState> {
  constructor(protected store: TicketsStore) {
    super(store);
  }
}
