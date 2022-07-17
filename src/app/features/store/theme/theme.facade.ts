import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as ACTIONS from './theme.actions'
import { selectTheme } from './theme.selectors'

@Injectable({ providedIn: 'root' })
export class ThemeFacade {
  theme$ = this.store$.select(selectTheme)

  constructor(private store$: Store) {}

  init(): void {
    this.store$.dispatch(ACTIONS.init())
  }

  toggleTheme(): void {
    this.store$.dispatch(ACTIONS.toggleTheme())
  }
}
