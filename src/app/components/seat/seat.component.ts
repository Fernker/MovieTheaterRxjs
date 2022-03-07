import { Component, Input, OnInit } from '@angular/core';

export type SeatState = 'AVAILABLE' | 'SELECTED' | 'RESERVED';

@Component({
  selector: 'seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seatState: SeatState = 'AVAILABLE';

  get seatStateClass() {
    return this.seatState.toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}
