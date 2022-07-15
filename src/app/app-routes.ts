import { Route } from '@angular/router'
import { HomeComponent, PageNotFoundComponent } from '~core/components'

export const ROUTES: Route[] = [
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: 'page-not-found' },
]
