import { ChangeDetectionStrategy, Component, EventEmitter, Output, input, model } from '@angular/core';
import { Flight } from '../../logic-flight';
import { NgStyle, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-flight-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <div
        class="card"
        [ngStyle]="{ 'background-color': selected() ? 'rgb(204, 197, 185)' : 'white' }"
      >
        <div class="card-header">
          <h2 class="card-title">{{ item()?.from }} - {{ item()?.to }}</h2>
        </div>

        <div class="card-body">
          <p>Flight-No.: {{ item()?.id }}</p>
          <p>Date: {{ item()?.date | date : "dd.MM.yyyy HH:mm" }}</p>
          <p>
            <button
              (click)="toggleSelection()"
              class="btn btn-info btn-sm"
              style="min-width: 85px; margin-right: 5px"
            >{{ selected() ? "Remove" : "Select" }}</button>
            <a
              [routerLink]="['../edit', item()?.id]"
              class="btn btn-success btn-sm"
              style="min-width: 85px; margin-right: 5px"
            >Edit</a>
            <button
              (click)="delay()"
              class="btn btn-danger btn-sm"
              style="min-width: 85px; margin-right: 5px"
            >Delay</button>
          </p>
        </div>
      </div>
    `,
    imports: [NgStyle, RouterLink, DatePipe]
})
export class FlightCardComponent {
  readonly item = input<Flight>();
  readonly selected = model(false);
  @Output() delayTrigger = new EventEmitter<Flight>();

  toggleSelection(): void {
    this.selected.set(!this.selected());
  }

  delay(): void {
    this.delayTrigger.emit(this.item());
  }
}
