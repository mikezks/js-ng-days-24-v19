import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightResolver } from './logic-flight';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TicketEffects } from './logic-flight/+state/effects';
import { ticketFeature } from './logic-flight/+state/reducer';


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature-flight').then(m => m.FlightBookingComponent),
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(ticketFeature),
        EffectsModule.forFeature([TicketEffects])
      )
    ],
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        children: [
          {
            path: '',
            redirectTo: 'search',
            pathMatch: 'full'
          },
          {
            path: 'search',
            loadComponent: () => import('./feature-flight').then(m => m.FlightSearchComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./feature-flight').then(m => m.FlightEditComponent),
            resolve: {
              flight: FlightResolver
            }
          }
        ]
      }
    ]
  }
];

export default BOOKING_ROUTES;
