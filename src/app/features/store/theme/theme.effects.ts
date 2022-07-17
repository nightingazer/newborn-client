import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { map, mergeMap, tap, withLatestFrom } from 'rxjs'
import { LocalStorageService } from '~core/services/local-storage.service'
import * as ACTIONS from './theme.actions'
import { initialThemeState, IThemeState } from './theme.reducer'
import { selectThemeState } from './theme.selectors'

@Injectable()
export class ThemeEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store$: Store,
    @Inject(DOCUMENT) private document: Document
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.init),
      map<void, IThemeState>(() => ({
        mode: this.localStorageService.getThemeMode() || initialThemeState.mode,
        theme: this.localStorageService.getTheme() || initialThemeState.theme,
      })),
      mergeMap(({ theme, mode }) => [ACTIONS.setMode({ mode }), ACTIONS.setTheme({ theme })])
    )
  )

  setMode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.setMode),
      mergeMap(() => [ACTIONS.saveTheme()])
    )
  )

  setTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.setTheme),
      mergeMap(() => [ACTIONS.saveTheme()])
    )
  )

  toggleMode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.toggleMode),
      mergeMap(() => [ACTIONS.saveTheme()])
    )
  )

  saveTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.setMode),
      mergeMap(() => this.store$.select(selectThemeState)),
      tap(({ theme, mode }) => {
        this.localStorageService.setTheme(theme)
        this.localStorageService.setThemeMode(mode)
      }),
      mergeMap((value) => [ACTIONS.loadBundle(value)])
    )
  )

  loadBundle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ACTIONS.loadBundle),
        tap(({ theme, mode }) => {
          const bundleName = `${theme}-${mode}.css`
          const head = this.document.querySelector('head')
          const themeLink = head?.querySelector('#client-theme') as HTMLLinkElement | null
          if (!themeLink) {
            const style = this.document.createElement('link')
            style.id = 'client-theme'
            style.rel = 'stylesheet'
            style.href = bundleName
            head?.appendChild(style)
            return
          }
          themeLink.href = bundleName
        })
      ),
    { dispatch: false }
  )
}
