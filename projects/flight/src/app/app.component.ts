import { FlightService } from './booking/logic-flight/data-access/flight.service';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent {
  flights = inject(FlightService).flights;

  constructor(private flightService: FlightService) {}
}
