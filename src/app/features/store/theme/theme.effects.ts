import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { map, mergeMap, tap, withLatestFrom } from 'rxjs'
import { LocalStorageService } from '~core/services/local-storage.service'
import * as ACTIONS from './theme.actions'
import { ETheme, initialThemeState } from './theme.reducer'
import { selectTheme } from './theme.selectors'

@Injectable()
export class ThemeEffects {
  constructor(private actions$: Actions, private localStorageService: LocalStorageService, private store$: Store) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.init),
      map(() => this.localStorageService.getTheme() || initialThemeState.theme),
      mergeMap((theme: ETheme) => [ACTIONS.setTheme({ theme })])
    )
  )

  setTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.setTheme),
      withLatestFrom(({ theme }) => ACTIONS.saveTheme())
    )
  )

  saveTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ACTIONS.setTheme),
        mergeMap(() => this.store$.select(selectTheme)),
        tap((theme) => this.localStorageService.setTheme(theme))
      ),
    { dispatch: false }
  )
}
