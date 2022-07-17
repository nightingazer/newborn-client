import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as ACTIONS from './theme.actions'
import { ETheme, EThemeMode } from './theme.reducer'
import { selectTheme, selectThemeMode } from './theme.selectors'

@Injectable({ providedIn: 'root' })
export class ThemeFacade {
  theme$ = this.store$.select(selectTheme)
  mode$ = this.store$.select(selectThemeMode)

  constructor(private store$: Store) {}

  init(): void {
    this.store$.dispatch(ACTIONS.init())
  }

  toggleMode(): void {
    this.store$.dispatch(ACTIONS.toggleMode())
  }

  setMode(mode: EThemeMode): void {
    this.store$.dispatch(ACTIONS.setMode({ mode }))
  }

  setTheme(theme: ETheme): void {
    this.store$.dispatch(ACTIONS.setTheme({ theme }))
  }
}
