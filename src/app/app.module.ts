import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheaterComponent } from './components/theater/theater.component';
import { SeatComponent } from './components/seat/seat.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [AppComponent, TheaterComponent, SeatComponent, RowComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
