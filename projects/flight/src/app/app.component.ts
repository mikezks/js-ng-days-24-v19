import { FlightService } from './booking/logic-flight/data-access/flight.service';
import { afterRenderEffect, Component, inject, Signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    afterRenderEffect(() => console.log('mixedReadWrite per shorthand syntax'));

    afterRenderEffect({
      earlyRead: () => { console.log('earlyRead'); return 'info for next phase'; },
      write: (info: Signal<string>) => { console.log('write,', info()); },
      mixedReadWrite: () => { console.log('mixedReadWrite'); },
      read: () => { console.log('read'); },
    });
  }
}
